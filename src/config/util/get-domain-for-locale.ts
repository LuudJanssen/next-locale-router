import { IDomain } from "../../domain.interface"
import { domainContainsLocale } from "./domain-contains-locale"

export const getDomainByLocale = (domains: IDomain[], locale: string) =>
  domains.find((domain) => domainContainsLocale(domain, locale))
