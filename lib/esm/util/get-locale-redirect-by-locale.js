import { getDomainByLocale } from "./get-domain-by-locale";
import { getLocaleRedirects } from "./get-locale-redirects";
export var getLocaleRedirectByLocale = function getLocaleRedirectByLocale(domains, locale) {
  var domain = getDomainByLocale(domains, locale);
  var localeRedirects = getLocaleRedirects(domain);
  return localeRedirects.find(function (_ref) {
    var redirectLocale = _ref.locale;
    return redirectLocale === locale;
  });
};