import { Request } from "express"
import { IDomain } from "../../../domain.interface"
import { logger } from "../../../logger"
import { getLocalesForDomains } from "../../../util/get-locales-for-domains"
import { extractLocaleFromHeader } from "./extract-locale-from-header"
import { extractNextLocaleCookie } from "./extract-next-locale-cookie"

export const negotiateLocale = (request: Request, domain: IDomain) => {
  const locales = getLocalesForDomains([domain])

  if (locales.length === 1) {
    logger.debug(
      `Language negotiation was skipped because this domain only contains "${locales[0]}" as a locale, which was returned.`,
    )
    return locales[0]
  }

  const forcedLocale = extractNextLocaleCookie(request, locales)
  if (typeof forcedLocale === "string") {
    logger.debug(
      `Language negotiation succeeded through Next.js cookie and returned "${forcedLocale}".`,
    )
    return forcedLocale
  }

  const negotiatedLocale = extractLocaleFromHeader(request, locales)
  if (typeof negotiatedLocale === "string") {
    logger.debug(
      `Language negotiation succeeded through the request headers and returned "${negotiatedLocale}'.`,
    )
    return negotiatedLocale
  }

  logger.debug(
    `Language negotiation didn't yield a result and the defaultLocale "${domain.defaultLocale}" was returned.`,
  )

  return domain.defaultLocale
}
