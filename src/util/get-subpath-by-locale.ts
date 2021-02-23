import { IDomain } from "../domain.interface"
import { ISubpath } from "../subpath.interface"
import { getDomainByLocale } from "./get-domain-by-locale"

export const getSubpathByLocale = (domains: IDomain[], locale: string): ISubpath | undefined => {
  const domain = getDomainByLocale(domains, locale)
  return domain.subpaths.find((subpath) => subpath.locale === locale)
}
