import { IDomain } from "../domain.interface"
import { getLocalesForDomains } from "./get-locales-for-domains"

export const domainContainsLocale = (domain: IDomain, locale: string) =>
  getLocalesForDomains([domain]).includes(locale)
