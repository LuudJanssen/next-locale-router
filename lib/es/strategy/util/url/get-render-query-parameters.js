export const getRenderQueryParameters = (locale, domain) => {
  const defaultLocale = domain.defaultLocale;
  return {
    __nextLocale: locale,
    __nextDefaultLocale: defaultLocale
  };
};