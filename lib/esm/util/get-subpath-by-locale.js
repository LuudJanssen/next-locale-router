import { getDomainByLocale } from "./get-domain-by-locale";
export var getSubpathByLocale = function getSubpathByLocale(domains, locale) {
  var domain = getDomainByLocale(domains, locale);
  return domain.subpaths.find(function (subpath) {
    return subpath.locale === locale;
  });
};