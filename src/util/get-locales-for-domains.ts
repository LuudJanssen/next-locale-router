import { IDomain } from "../domain.interface"
import { getSubpathsLocales } from "./get-subpaths-locales"

export const getLocalesForDomains = (domains: IDomain[]): string[] =>
  domains.flatMap((domain) => getSubpathsLocales(domain.subpaths))
