import { getDomainByLocale } from "./get-domain-by-locale";
export const getSubpathByLocale = (domains, locale) => {
  const domain = getDomainByLocale(domains, locale);
  return domain.subpaths.find(subpath => subpath.locale === locale);
};