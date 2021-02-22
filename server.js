const { createServer } = require("http")
const { parse, format } = require("url")
const next = require("next")

const { config } = require("leen-bakker-next-locale-router")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

const cleanPathSegment = (pathSegment) => pathSegment.replaceAll("/", "")

const getPathSegment = (pathname) => pathname.split("/").filter((pathSegment) => pathSegment === "")
const isPagesRequest = (pathname) => getPathSegment(pathname)[0] !== "_next"

const cleanLocaleSubpaths = config.localeSubpaths.map((path) => cleanPathSegment(path))

const getLocalePathSegment = (pathname) => {
  const pathSegments = getPathSegment(pathname)
  const [expectedLocalePathSegment] = pathSegments

  if (typeof expectedLocalePathSegment === "undefined") {
    return undefined
  }

  console.log(cleanLocaleSubpaths)

  const containsLocaleRelatedSubpath =
    locales.includes(expectedLocalePathSegment) ||
    cleanLocaleSubpaths.includes(expectedLocalePathSegment)

  if (!containsLocaleRelatedSubpath) {
    return undefined
  }

  return expectedLocalePathSegment
}

const pathContainsLocaleSegment = (pathname) => {
  const localeSubpath = getLocalePathSegment(pathname)

  return typeof localeSubpath !== "undefined"
}

const localeMatchesHostname = (locale, hostname) => {
  const expectedDomain = config.getDomain(locale)

  if (typeof expectedDomain === "undefined") {
    throw new Error(`Locale "${locale}" has no corresponding domain.`)
  }

  return hostname === expectedDomain.hostname
}

const subpathContainsLocalePath = (subpath, localePath) => {
  return cleanPathSegment(subpath.path) === localePath
}

const domainContainsLocalePath = (domain, localePathSegment) => {
  const matchedSubpath = domain.subpaths.find((subpath) =>
    subpathContainsLocalePath(subpath, localePathSegment),
  )

  return typeof matchedSubpath !== "undefined"
}

const getDomainForLocalePathSegment = (domains, localePathSegment) => {
  return domains.find(
    (domain) =>
      config.getDomain(localePathSegment) === domain ||
      domainContainsLocalePath(domain, localePathSegment),
  )
}

const getSubpathForLocalePathSegment = (subpaths, localePathSegment) => {
  return subpaths.find(
    (subpath) =>
      subpath.locale === localePathSegment || subpathContainsLocalePath(subpath, localePathSegment),
  )
}

const getLocaleForLocalePathSegment = (localePathSegment) => {
  const subpaths = config.domains.flatMap((domain) => domain.subpaths)
  const subpath = getSubpathForLocalePathSegment(subpaths, localePathSegment)

  return subpath.locale
}

const getLocaleSubpathForLocale = (locale) => {
  const domain = config.getDomain(locale)
  const subpath = getSubpathForLocalePathSegment(domain.subpaths, localePathSegment)

  return cleanPathSegment(subpath.path)
}

const isRightLocaleSubpathForLocale = (localeSubpath, locale) => {
  return getLocaleSubpathForLocale(locale) === localeSubpath
}

const replaceHostnameInUrl = (url, newHostname) => {
  const { hostname, ...urlSegments } = parse(url)

  return format({
    hostname: newHostname,
    ...urlSegments,
  })
}

const replacePathnameInUrl = (url, newPathname) => {
  const { pathname, ...urlSegments } = parse(url)

  return format({
    pathname: newPathname,
    ...urlSegments,
  })
}

const replaceLocalePathSegmentInPathname = (
  pathname,
  oldLocalePathSegment,
  newLocalePathSegment,
) => {
  const pathSegments = pathname.split("/") // We don't use `getPathSegments` as it'll remove empty path segments
  const oldLocalePathSegmentIndex = pathSegments.indexOf(oldLocalePathSegment)

  pathSegments[oldLocalePathSegmentIndex] = newLocalePathSegment

  return pathSegments.join("/")
}

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (!isPagesRequest(pathname)) {
      console.log("--NO_PAGES--", req.hostname, pathname)
      return handle(req, res, parsedUrl)
    }

    if (!pathContainsLocaleSegment(pathname)) {
      console.log("--NO_LOCALE--", req.hostname, pathname)
      // locale detection
      return handle(req, res, parsedUrl)
    }

    const localePathSegment = getLocalePathSegment(pathname)
    const locale = getLocaleForLocalePathSegment(localePathSegment)

    if (!localeMatchesHostname(locale, req.hostname)) {
      console.log("--LOCALE_HOSTNAME_MISMATCH--", req.hostname, pathname)
      const domainMatchingLocale = config.getDomain(locale)
      const newUrl = replaceHostnameInUrl(req.url, domainMatchingLocale.hostname)

      return res.redirect(308, newUrl)
    }

    if (!isRightLocaleSubpathForLocale(localePathSegment, locale)) {
      console.log("--INVALID_SUBPATH--", req.hostname, pathname)
      const localeSubpath = getLocaleSubpathForLocale(locale)
      const newPathname = replaceLocalePathSegmentInPathname(pathname, localeSubpath)
      const newUrl = replacePathnameInUrl(req.url, newPathname)

      return res.redirect(308, newUrl)
    }

    console.log("--NORMAL_RENDER--", req.hostname, pathname)

    if (pathname === "/a") {
      app.render(req, res, "/a", query)
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })
})
