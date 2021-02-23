import { IDomain } from "../domain.interface"
import { getDomainsLocales } from "./get-domains-locales"

export const domainContainsLocale = (domain: IDomain, locale: string) =>
  getDomainsLocales([domain]).includes(locale)
