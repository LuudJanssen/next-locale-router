# Next.js locale router

Next.js v10 introduced [internationalized routing](https://nextjs.org/docs/advanced-features/i18n-routing) support. However, it's limited:

1. It requires a `defaultLocale` for subpaths, meaning always one locale will be available on `/` instead of `/${locale}`.
2. It doesn't allow changing the subpaths for a locale. For example the `nl-BE` locale will be available under `/nl-BE`, it can't be changed to `/nl` for example.

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
+ import Link from "@incentro/next-locale-router"
```

### Debugging

If you want some additional debugging output in your console, set the `NEXT_PUBLIC_LOCALE_ROUTER_DEBUG=true` environment variable before starting the node process, or set the `debug` property in your `i18n.config.js` file to `true`.

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
2. Do we have a domain config for the hostname for this request?
   - NO - Log an error and return the **PASSTHROUGH** strategy.
3. Is the user trying to access an original Next.js locale route which we want to rewrite? For example `/nl-BE/` to `/nl/`.
   - YES - **REDIRECT** to the subpath we defined.
4. Is this a valid locale subpath for the given domain?
   - YES - **RENDER** the page the user is accessing with the matching locale.
5. Is this a valid locale subpath for a different domain?
   - YES - **REDIRECT** to the other domain.
6. The user isn't accessing a language specific route, so we need to check the user's preference and determine the locale he prefers. This uses the browsers `Accept-Language` header, as well checking for the `NEXT_LOCALE` cookie set by Next.js. Otherwise it falls back to the `defaultLanguage` for the given domain.
7. Is a redirect necessary for the preferred locale?
   - YES - **REDIRECT** to the subpath for the preferred locale.
8. Nothing needs to be done on our side: **PASSTHROUGH**.

### Custom `<Link>` component

Besides having the server redirect URL's we also need to control client side routing. We do this by wrapping Next.js's `<Link>` component.

1. `src/client/link/link.tsx` → We use Next.js own `<Link>` component, but provide our own `<LinkLocaleRewriter>` as its child and we make sure we pass the `href` prop.

2. Next.js's `<Link>` component sets a couple of properties on its child, like the `href` prop and an `onClick` handler.

3. We wrap the `onClick` handler to make sure we can execute some code whenever a user click a `<Link>`.

4. `src/client/link/util/wrap-click-handler-with-rewrite.ts` → Whenever the user clicks on a `<Link>` we subscribe to Next.js router's `beforeHistoryChange` event which Next.js will fire.

5. When this event fires we trigger our own `window.history.pushState` instead of the one that Next.js would execute. This simply sets the browser's URL to the value we want.

6. How do we prevent Next.js from changing the URL? Well, here is where things get hacky. Check `src/client/link/util/disable-history-push-state-for-one-tick.ts`. This method overwrites the browser's `window.history.pushState` for one Javascript "tick". Because the `beforeHistoryChange` method is executed just before Next.js does its own history pushing, we point Next.js to an empty method. We use `setTimeout` to ensure we reinstate `window.history.pushState` in the next Javascript "tick".

I know, it's pretty hacky, but it's the only way I could update te client URL's without rewriting Next.js's `<Link>` component or showing a URL change to the user.

## TODO's

- [x] Create custom `<Link>` component that supports the configuration.
- [ ] Allow rewriting sitemaps according to the configuration.
- [ ] Add unit tests for the most critical strategies.
