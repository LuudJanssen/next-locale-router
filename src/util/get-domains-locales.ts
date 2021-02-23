import { IDomain } from "../domain.interface"
import { getSubpathsLocales } from "./get-subpaths-locales"

export const getDomainsLocales = (domains: IDomain[]): string[] =>
  domains.flatMap((domain) => getSubpathsLocales(domain.subpaths))
