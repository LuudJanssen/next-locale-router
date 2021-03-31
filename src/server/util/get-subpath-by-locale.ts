import { IDomain } from "../domain.interface"
import { ISubpath } from "../subpath.interface"
import { getDomainByLocale } from "./get-domain-by-locale"

export const getSubpathByLocale = (domains: IDomain[], locale: string): ISubpath => {
  const domain = getDomainByLocale(domains, locale)
  return domain.subpaths.find((subpath) => subpath.locale === locale)! // `getDomainByLocale()` will throw if there is no domain for this locale
}
