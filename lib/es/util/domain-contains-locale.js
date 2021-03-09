import { getLocalesForDomains } from "./get-locales-for-domains";
export const domainContainsLocale = (domain, locale) => getLocalesForDomains([domain]).includes(locale);