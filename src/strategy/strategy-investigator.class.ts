import { Request } from "express"
import { Config } from "../config/config.class"
import { logger } from "../logger"
import { getLocaleRedirects } from "../util/get-locale-redirects"
import { getSubpathByLocale } from "../util/get-subpath-by-locale"
import { ChainablePassThroughStrategy as Passthrough } from "./chainable"
import { ChainableStrategy } from "./chainable/chainable-strategy.abstract"
import { Strategy } from "./strategy.type"
import { createRedirect } from "./util/create-redirect"
import { createRedirectToDomain } from "./util/create-redirect-to-domain"
import { createRender } from "./util/create-render"
import { extractLocale } from "./util/request/extract-locale"
import { getRequestUrl } from "./util/request/get-request-url"
import { isInternalNextRequest } from "./util/request/is-internal-next-request"
import { subpathNeedsRedirect } from "./util/url/subpath-needs-redirect"
import { urlMatchDomains } from "./util/url/url-match-domains"
import { urlMatchRedirects } from "./util/url/url-match-redirects"
import { urlMatchSubpaths } from "./util/url/url-match-subpaths"

export class StrategyInvestigator {
  constructor(protected config: Config) {}

  public determineStrategy(request: Request): Strategy {
    const url = getRequestUrl(request)
    return this.getStrategy(request).log(url).serialize()
  }

  private getStrategy(request: Request): ChainableStrategy {
    const url = getRequestUrl(request)

    if (isInternalNextRequest(url)) {
      return new Passthrough()
    }

    const domain = this.config.getDomainByHostname(request.hostname)!
    if (typeof domain === "undefined") {
      logger.error(
        `The locale routing configuration didn't contain configuration for hostname "${request.hostname}". Falling back to passthrough strategy.`,
      )
      return new Passthrough()
    }

    const nextLocaleRedirects = getLocaleRedirects(domain)
    const matchedRedirect = urlMatchRedirects(url, nextLocaleRedirects)
    if (typeof matchedRedirect !== "undefined") {
      return createRedirect(url, matchedRedirect)
    }

    const matchedLocaleSubpath = urlMatchSubpaths(url, domain.subpaths)
    if (typeof matchedLocaleSubpath !== "undefined") {
      return createRender(url, matchedLocaleSubpath, domain)
    }

    const matchedDomain = urlMatchDomains(url, this.config.domains)
    if (typeof matchedDomain !== "undefined") {
      return createRedirectToDomain(url, matchedDomain)
    }

    const negotiatedLocale = extractLocale(request, domain)
    const negotiatedSubpath = getSubpathByLocale([domain], negotiatedLocale)!
    if (subpathNeedsRedirect(url, negotiatedSubpath)) {
      return createRedirect(url, { source: "/", destination: negotiatedSubpath.path })
    }

    return new Passthrough()
  }
}
