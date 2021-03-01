import { IDomain } from "../domain.interface"
import { cleanPathSegment } from "../strategy/util/url/clean-path-segment"
import { getLocaleSubpathsForDomains } from "./get-locale-subpaths-for-domains"
import { getLocalesForDomains } from "./get-locales-for-domains"

export const getLocalePathSegmentsForDomain = (domain: IDomain): string[] => {
  const locales = getLocalesForDomains([domain])
  const localePaths = getLocaleSubpathsForDomains([domain]).map((path) => cleanPathSegment(path))

  return [...locales, ...localePaths]
}
