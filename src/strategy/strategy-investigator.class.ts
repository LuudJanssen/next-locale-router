import { Request } from "express"
import { format, parse, URL } from "url"
import { Config } from "../config/config.class"
import { IDomain } from "../domain.interface"
import { logger } from "../logger"
import { getSubpathByLocale } from "../util/get-subpath-by-locale"
import { getSubpathForLocalePathSegment } from "../util/get-subpath-for-locale-path-segment"
import { prefixPathname } from "../util/prefix-pathname"
import { removeLocalePathSegmentFromPathname } from "../util/remove-locale-path-segment-from-pathname"
import {
  ChainablePassThroughStrategy as Passthrough,
  ChainablePermanentRedirectStrategy as PermanentRedirect,
  ChainableRenderStrategy as Render,
} from "./chainable"
import { ChainableStrategy } from "./chainable/chainable-strategy.abstract"
import { Strategy } from "./strategy.type"
import { extractLocale } from "./util/request/extract-locale"
import { getRequestUrl } from "./util/request/get-request-url"
import { isInternalNextRequest } from "./util/request/is-internal-next-request"
import { localeNeedsRedirect } from "./util/request/locale-needs-redirect"
import { cleanPathSegment } from "./util/url/clean-path-segment"
import { formatUrl } from "./util/url/format-url"
import { getPathSegments } from "./util/url/get-path-segments"
import { getQueryParameters } from "./util/url/get-query-parameters"
import { getRenderQueryParameters } from "./util/url/get-render-query-parameters"
import { replaceHostnameInUrl } from "./util/url/replace-hostname-in-url"

export class StrategyInvestigator {
  private readonly cleanLocaleSubpaths: string[]

  constructor(protected config: Config) {
    this.cleanLocaleSubpaths = config.localeSubpaths.map(cleanPathSegment)
  }

  public determineStrategy(request: Request): Strategy {
    const url = getRequestUrl(request)
    return this.getStrategy(request).log(url).serialize()
  }

  private getStrategy(request: Request): ChainableStrategy {
    const url = getRequestUrl(request)

    if (isInternalNextRequest(url)) {
      return new Passthrough()
    }

    if (!this.hasDomainForRequest(request)) {
      logger.error(
        `The locale routing configuration didn't contain configuration for hostname "${request.hostname}". Falling back to passthrough strategy.`,
      )
      return new Passthrough()
    }

    const domain = this.config.getDomainByHostname(request.hostname)!
    const localePathSegment = this.getLocalePathSegment(url)

    if (typeof localePathSegment === "undefined") {
      const locale = this.negotiateLocaleForUser(request)

      // We can be sure a locale with a matching domain exists because we already know that the
      // localePathSegment is a valid locale or subpath
      const expectedDomain = this.config.getDomain(locale)!

      if (expectedDomain.hostname !== domain.hostname) {
        return this.createRedirectToDomain(url, expectedDomain)
      }

      if (localeNeedsRedirect(url, domain, locale)) {
        return this.createRedirectToLocale(url, domain, locale)
      }

      return new Passthrough()
    }

    const locale = this.getLocaleForLocalePathSegment(domain, localePathSegment)!
    return this.createRender(url, localePathSegment, locale)
  }

  private hasDomainForRequest(request: Request) {
    return typeof this.config.getDomainByHostname(request.hostname) !== "undefined"
  }

  private negotiateLocaleForUser(request: Request) {
    const domain = this.config.getDomainByHostname(request.hostname)!
    return extractLocale(request, domain)
  }

  private createRender(url: URL, localePathSegment: string, locale: string): Render {
    const queryParameters = getQueryParameters(url)
    const renderPath = removeLocalePathSegmentFromPathname(url.pathname, localePathSegment)

    const query = {
      ...queryParameters,
      ...getRenderQueryParameters(locale, this.config),
    }

    return new Render({
      pathname: renderPath,
      query,
    })
  }

  private createRedirectToLocale(url: URL, domain: IDomain, locale: string) {
    const { pathname, search, hash } = parse(formatUrl(url)) // We need the legacy Node.js API url format
    const localeSubpath = getSubpathByLocale([domain], locale)!

    const newPathname = prefixPathname(pathname!, localeSubpath.path)

    const formattedUrl = format({
      search,
      hash,
      pathname: newPathname,
    })

    return new PermanentRedirect({ url: formattedUrl })
  }

  private createRedirectToDomain(url: URL, domain: IDomain): PermanentRedirect {
    const urlObject = replaceHostnameInUrl(url, domain.hostname)
    const formattedUrl = format(urlObject)
    return new PermanentRedirect({ url: formattedUrl })
  }

  private localeMatchesHostname(locale: string, hostname: string) {
    // We
    const expectedDomain = this.config.getDomain(locale)!
    return hostname === expectedDomain.hostname
  }

  private getLocaleForLocalePathSegment(domain: IDomain, localePathSegment: string) {
    const subpath = getSubpathForLocalePathSegment(domain.subpaths, localePathSegment)
    return subpath?.locale
  }

  private getLocalePathSegment(url: URL) {
    const pathSegments = getPathSegments(url)
    const [expectedLocalePathSegment] = pathSegments

    if (typeof expectedLocalePathSegment === "undefined") {
      return undefined
    }

    const containsLocaleRelatedSubpath =
      this.config.locales.includes(expectedLocalePathSegment) ||
      this.cleanLocaleSubpaths.includes(expectedLocalePathSegment)

    if (!containsLocaleRelatedSubpath) {
      return undefined
    }

    return expectedLocalePathSegment
  }
}
