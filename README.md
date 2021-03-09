# Next.js locale router

Next.js v10 introduced [internationalized routing](https://nextjs.org/docs/advanced-features/i18n-routing) support. However, it's limited:

1. It requires a `defaultLocale` for subpaths, meaning always one locale will be available on `/` instead of `/${locale}`. [next.js#18419](https://github.com/vercel/next.js/discussions/18419)
2. It doesn't allow changing the subpaths for a locale. For example the `nl-BE` locale will be available under `/nl-BE`, it can't be changed to `/nl` for example. [next.js#17078 (comment)](https://github.com/vercel/next.js/discussions/17078#discussioncomment-357232)

It also contains a couple of bugs where the locale of domain X (`/nl-BE`) is also available under domain Y. So accessing domain-y.com/nl-BE works, even though `nl-BE` is not part of domain Y's configuration.

This package solves these problems by exposing Express middleware to route these use cases in the desired way.

## Usage

This package requires you create a custom `server.js` file for your Next.js project and create a custom `i18n.config.js` file in the root of your project.

### Configuration

The configuration for the router is a superset of the Next.js i18n config. Create the `i18n.config.js` file in the root of your project and follow this syntax:

```javascript
const dutchDomain = {
  hostname: "nextjs.dutch",
  defaultLocale: "nl",
  subpaths: [
    {
      locale: "nl",
      path: "/",
    },
  ],
}

const belgianDomain = {
  hostname: "nextjs.belgian",
  defaultLocale: "nl-BE",
  subpaths: [
    {
      locale: "nl-BE",
      path: "/nl/",
    },
    {
      locale: "fr",
      path: "/fr/",
    },
  ],
}

const domains = [dutchDomain, belgianDomain]
const defaultLocale = "nl"

module.exports = {
  domains,
  defaultLocale,
}
```

Since this configuration file is a superset of the Next.js i18n config we can create the Next.js config for you. This will result in the following `next.config.js` file:

```javascript
const { withLocaleRouter } = require("@incentro/next-locale-router")

module.exports = withLocaleRouter()({
  // Next.js config
})
```

Or, if you're using [next-compose-plugins](https://www.npmjs.com/package/next-compose-plugins):

```javascript
const withPlugins = require("next-compose-plugins")
const { withLocaleRouter } = require("@incentro/next-locale-router")

module.exports = withPlugins([withLocaleRouter()], {
  // Next.js config
})
```

#### Additional options

Next to the `config.domains` and `config.defaultLocale` options (which are **required**), you have the following options:

##### `config.ignore`

A function that allows you to force certain routes to be ignored by the locale router. It receives a [parsed url](https://developer.mozilla.org/en-US/docs/Web/API/URL) as its parameter and should return a boolean:

```javascript
const ignore = (url) => {
  return url.pathname === "favicon.ico"
}

module.exports = {
  domains,
  defaultLocale,
  ignore: (url) => ignore,
}
```

A common use case for this ignore parameter is to ignore routes in the `public`. Currently, `next-locale-router` doesn't ignore items in the `public` directory, because we can't easily determine what is a `pages` route and what is a `public` route and we don't want to rewrite Next.js's internals. For most public routes, this isn't a problem, because the routes are still accessible.

Take for example the favicon (`favicon.ico`). When a user is accessing the `/favicon.ico` route, but should be on the Dutch locale at `/nl/`, the request will be redirected to `/nl/favico.ico` and the image will still successfully be resolved.

The problem here is that our server will be handing out a lot of redirects and the client needs to do unnecessary redirects. You can add known public routes to the `config.ignore` option to prevent these redirects.

### Server middleware

Create a `server.js` file in the root of the project, as per [the Next.js standard](https://nextjs.org/docs/advanced-features/custom-server). This example is an adapation of the [custom-server-express Next.js template](https://github.com/vercel/next.js/tree/canary/examples/custom-server-express):

```javascript
const next = require("next")
const express = require("express")

const { config, createLocaleMiddleware } = require("@incentro/next-locale-router")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

const localeMiddleware = createLocaleMiddleware(config, app)

app.prepare().then(() => {
  const server = express()

  // Trust proxy is required if you're running behind a reverse proxy
  // This is because we need to know the original hostname before the request was proxied.
  server.set("trust proxy", true)
  server.use(localeMiddleware)

  server.all("*", (request, response) => handle(request, response))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })
})
```

### `<Link>` component

On the client side we also need to rewrite the URL's. We do this by exposing a custom `<Link>` component, just like [Next.js's `<Link>` component](https://nextjs.org/docs/api-reference/next/link). It supports the exact same props as [next/link](https://nextjs.org/docs/api-reference/next/link), so you can just update your imports:

```diff
- import Link from "next/link"
+ import Link from "@incentro/next-locale-router/link"
```

### Client side router

Just like the custom `<Link>` component, we also need to update our URL's when using the client side router directly. We do this by wrapping [next/router](https://nextjs.org/docs/api-reference/next/router). The only thing you need to do is to update your `next/router` imports:

#### Global router usage

```diff
- import SingletonRouter from "next/router"
+ import SingletonRouter from "@incentro/next-locale-router/router"
```

#### `useRouter` hook

```diff
- import { useRouter } from "next/router"
+ import { useRouter } from "@incentro/next-locale-router/router"
```

### `getServerSideProps` and `getStaticProps` redirects

When redirecting with `getServerSideProps` or `getStaticProps` it's important to redirect to the right destination for the locale to prevent double redirects or even worse, a redirect loop. When creating redirects in `getServerSideProps` or `getStaticProps` you can use the `addLocaleToRedirect` method exported by this package.

```typescript
import { addLocaleToRedirect } from "@incentro/next-locale-router/props"

export const getServerSideProps: GetServerSideProps = ({ locale }) => {
  // This method rewrites the /about route to the right route for the given locale, e.g. `/nl/about`
  const redirect = addLocaleToRedirect({
    destination: '/about',
    permanent: true,
  }, locale)

  return { redirect }
}
```

### Utility methods

This project also exposes a utility method for stripping the locale from a path. This can be helpful to test for certain routes in your code. For example when checking the url of the `getServerSideProps` or `getStaticProps` context you'll see it includes the locale:

```typescript
import { GetServerSideProps } from "next"

const getServerSideProps: GetServerSideProps = ({ resolvedUrl }) => {
  console.log(resolvedUrl) // This would log "/nl/about" for the "pages/about.tsx" page
}
```

We can use the `removeLocaleFromPath` method from `@incentro/next-locale-router/props` to remove the `/nl` prefix:

```typescript
import { GetServerSideProps } from "next"
import { removeLocaleFromPath } from "@incentro/next-locale-router/props"

const getServerSideProps: GetServerSideProps = ({ resolvedUrl }) => {
  const urlWithoutLocale = removeLocaleFromPath(resolvedUrl)
  console.log(urlWithoutLocale) // This would log "/about" for the "pages/about.tsx" page
}
```

### Debugging

If you want some additional debugging output in your console, set the `NEXT_PUBLIC_LOCALE_ROUTER_DEBUG=true` environment variable before starting the node process.

## How does it work?

### Express middleware

The middleware method receives the request and has to decide on one of the following strategies:

1. **PASSTHROUGH** - The request has to be forwarded to the next middleware. In the above `server.js` example, it should be handled by Next.js, not by the middleware.
2. **REDIRECT** - The user is on the wrong domain / subpath for the desired locale and needs to be redirected.
3. **RENDER** - The user is trying to access one of our custom subpaths and we need to let Next.js render this route with the right locale.

This project consists of a **strategy investigator** and a **strategy handler**. The investigator determines what strategy is necessary and the handler actually executes the strategy. You can find them under `src/strategy/strategy-investigator.class.ts` and `src/strategy/strategy-handler.class.ts` respectively.

The strategy investigator follows the following steps to determine the strategy:

1. Is the request an internal Next.js request (starting with `_next` for example)?
   - YES - Return the **PASSTHROUGH** strategy.
2. Do we need to ignore the URL due to the `config.ignore` option?
   - YES - Return the **PASSTHROUGH** strategy.
3. Do we have a domain config for the hostname for this request?
   - NO - Log an error and return the **PASSTHROUGH** strategy.
4. Is the user trying to access an original Next.js locale route which we want to rewrite? For example `/nl-BE/` to `/nl/`.
   - YES - **REDIRECT** to the subpath we defined.
5. Is this a valid locale subpath for the given domain?
   - YES - **RENDER** the page the user is accessing with the matching locale.
6. Is this a valid locale subpath for a different domain?
   - YES - **REDIRECT** to the other domain.
7. The user isn't accessing a language specific route, so we need to check the user's preference and determine the locale he prefers. This uses the browsers `Accept-Language` header, as well checking for the `NEXT_LOCALE` cookie set by Next.js. Otherwise it falls back to the `defaultLanguage` for the given domain.
8. Is a redirect necessary for the preferred locale?
   - YES - **REDIRECT** to the subpath for the preferred locale.
9. Nothing needs to be done on our side: **PASSTHROUGH**.

### Custom `<Link>` component

Besides having the server redirect URL's we also need to control client side routing. We do this by wrapping Next.js's `<Link>` component.

1. `src/client/link/link.tsx` → We use Next.js own `<Link>` component, but provide our own `<LinkLocaleRewriter>` as its child and we make sure we pass the `href` prop.

2. Next.js's `<Link>` component sets a couple of properties on its child, like the `href` prop and an `onClick` handler.

3. We wrap the `onClick` handler to make sure we can execute some code whenever a user click a `<Link>`.

4. `src/client/link/util/wrap-click-handler-with-rewrite.ts` → Whenever the user clicks on a `<Link>` we subscribe to Next.js router's `beforeHistoryChange` event which Next.js will fire.

5. When this event fires we trigger our own `window.history.pushState` instead of the one that Next.js would execute. This simply sets the browser's URL to the value we want.

6. How do we prevent Next.js from changing the URL? Well, here is where things get hacky. Check `src/client/link/util/disable-history-push-state-for-one-tick.ts`. This method overwrites the browser's `window.history.pushState` for one Javascript "tick". Because the `beforeHistoryChange` method is executed just before Next.js does its own history pushing, we point Next.js to an empty method. We use `setTimeout` to ensure we reinstate `window.history.pushState` in the next Javascript "tick".

I know, it's pretty hacky, but it's the only way I could update te client URL's without rewriting Next.js's `<Link>` component or showing a URL change to the user.

### Client side router

The wrapper of `next/router` works about the same as the `<Link>` component. We temporarily disable `window.history.pushState` for Next.js's own router and execute the state update ourselves. The only difference is that in this case we wrap the `router.push` and `router.replace` methods using a [proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). You can find the code for this at `src/client/router/util/wrap-router-with-rewrites.ts`.

## TODO's

- [x] Create custom `<Link>` component that supports the configuration.
- [x] Create wrapper around `next/router`
- [x] Allow creating redirect props for usage in `getServerSideProps()` and `getStaticProps()`
- [ ] Allow rewriting sitemaps according to the configuration.
- [ ] Add unit tests for the most critical strategies.
- [ ] Extend option to ignore (public) routes
- [ ] Automatically ignore routes in the `public` directory?
