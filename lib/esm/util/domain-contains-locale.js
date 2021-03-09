import { getLocalesForDomains } from "./get-locales-for-domains";
export var domainContainsLocale = function domainContainsLocale(domain, locale) {
  return getLocalesForDomains([domain]).includes(locale);
};