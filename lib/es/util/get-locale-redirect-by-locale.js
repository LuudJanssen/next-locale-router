import { getDomainByLocale } from "./get-domain-by-locale";
import { getLocaleRedirects } from "./get-locale-redirects";
export const getLocaleRedirectByLocale = (domains, locale) => {
  const domain = getDomainByLocale(domains, locale);
  const localeRedirects = getLocaleRedirects(domain);
  return localeRedirects.find(({
    locale: redirectLocale
  }) => redirectLocale === locale);
};