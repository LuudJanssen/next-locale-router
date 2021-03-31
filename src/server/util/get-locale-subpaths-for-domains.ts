import { IDomain } from "../domain.interface"

export const getLocaleSubpathsForDomains = (domains: IDomain[]) =>
  domains.flatMap((domain) => domain.subpaths).map((subpath) => subpath.path)
