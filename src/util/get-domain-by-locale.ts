import { IDomain } from "../domain.interface"
import { domainContainsLocale } from "./domain-contains-locale"

export const getDomainByLocale = (domains: IDomain[], locale: string): IDomain => {
  const domain = domains.find((domain) => domainContainsLocale(domain, locale))

  if (typeof domain === "undefined") {
    throw new Error(`Domains in config didn't contain locale "${locale}".`)
  }

  return domain
}
