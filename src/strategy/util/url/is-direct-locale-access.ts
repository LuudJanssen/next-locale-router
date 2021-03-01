import { IDomain } from "../../../domain.interface"
import { logger } from "../../../logger"
import { getLocalesForDomains } from "../../../util/get-locales-for-domains"
import { getSubpathByLocale } from "../../../util/get-subpath-by-locale"
import { cleanPathSegment } from "./clean-path-segment"

export const isDirectLocaleAccess = (domain: IDomain, localePathSegment: string) => {
  const locales = getLocalesForDomains([domain])

  logger.debug("path segment", localePathSegment, "locales", locales)

  if (!locales.includes(localePathSegment)) {
    return false
  }

  // We checked if the domain contains the path segment as locale
  const subpath = getSubpathByLocale([domain], localePathSegment)!

  const expectedPathSegmentForLocale = cleanPathSegment(subpath.path)
  const actualPathSegment = cleanPathSegment(localePathSegment)

  return expectedPathSegmentForLocale !== actualPathSegment
}
