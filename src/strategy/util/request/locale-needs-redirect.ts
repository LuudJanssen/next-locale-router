import { URL } from "url"
import { IDomain } from "../../../domain.interface"
import { getSubpathByLocale } from "../../../util/get-subpath-by-locale"

export const localeNeedsRedirect = (url: URL, domain: IDomain, locale: string) => {
  // We can assume we only get a locale that's valid for the domain
  const subpath = getSubpathByLocale([domain], locale)!
  return !url.pathname.startsWith(subpath.path)
}
