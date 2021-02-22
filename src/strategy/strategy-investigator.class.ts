import { Request } from "express"
import { format, URL } from "url"
import { Config } from "../config/config.class"
import { logger } from "../logger"
import {
  ChainablePassThroughStrategy as Passthrough,
  ChainablePermanentRedirectStrategy as PermanentRedirect,
  ChainableRenderStrategy as Render,
} from "./chainable"
import { Strategy } from "./strategy.type"
import { getRequestUrl } from "./util/request/get-request-url"
import { isInternalNextRequest } from "./util/request/is-internal-next-request"
import { cleanPathSegment } from "./util/url/clean-path-segment"
import { getPathSegments } from "./util/url/get-path-segments"
import { getSubpathForLocalePathSegment } from "./util/url/get-subpath-for-locale-path-segment"
import { replaceHostnameInUrl } from "./util/url/replace-hostname-in-url"

export class StrategyInvestigator {
  private readonly cleanLocaleSubpaths: string[]

  constructor(protected config: Config) {
    this.cleanLocaleSubpaths = config.localeSubpaths.map(cleanPathSegment)
  }

  public determineStrategy(request: Request): Strategy {
    const url = getRequestUrl(request)

    if (isInternalNextRequest(url)) {
      return new Passthrough().log(url).serialize()
    }

    const localePathSegment = this.getLocalePathSegment(url)
    logger.debug(`Determined locale path segment: "${localePathSegment}"`)
    if (typeof localePathSegment === "undefined") {
      return new PermanentRedirect({ url: "<<determine new locale url>>" }).log(url).serialize()
    }

    // We can be sure a locale with a matching domain exist because we already know that the
    // localePathSegment is a valid locale or subpath
    const locale = this.getLocaleForLocalePathSegment(localePathSegment)!
    const expectedDomain = this.config.getDomain(locale)!

    if (expectedDomain.hostname !== request.hostname) {
      const urlObject = replaceHostnameInUrl(url, expectedDomain.hostname)
      const formattedUrl = format(urlObject)

      return new PermanentRedirect({ url: formattedUrl }).log(url).serialize()
    }

    return new Render({ path: "fake" }).log(url).serialize()
  }

  private localeMatchesHostname(locale: string, hostname: string) {
    // We
    const expectedDomain = this.config.getDomain(locale)!
    return hostname === expectedDomain.hostname
  }

  private getLocaleForLocalePathSegment(localePathSegment: string) {
    const subpaths = this.config.domains.flatMap((domain) => domain.subpaths)
    const subpath = getSubpathForLocalePathSegment(subpaths, localePathSegment)
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
