import { getSubpathsLocales } from "./get-subpaths-locales";
export var getLocalesForDomains = function getLocalesForDomains(domains) {
  return domains.flatMap(function (domain) {
    return getSubpathsLocales(domain.subpaths);
  });
};