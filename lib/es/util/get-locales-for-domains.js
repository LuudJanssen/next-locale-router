import { getSubpathsLocales } from "./get-subpaths-locales";
export const getLocalesForDomains = domains => domains.flatMap(domain => getSubpathsLocales(domain.subpaths));