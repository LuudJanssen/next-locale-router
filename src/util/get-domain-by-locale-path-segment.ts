import { IDomain } from "../domain.interface"
import { getLocaleSubpathsForDomains } from "./get-locale-subpaths-for-domains"

export const getDomainBySubpath = (domains: IDomain[], subpath: string) => {
  return domains.find((domain) => getLocaleSubpathsForDomains([domain]).includes(subpath))
}
