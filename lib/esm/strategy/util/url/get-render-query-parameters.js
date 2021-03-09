export var getRenderQueryParameters = function getRenderQueryParameters(locale, domain) {
  var defaultLocale = domain.defaultLocale;
  return {
    __nextLocale: locale,
    __nextDefaultLocale: defaultLocale
  };
};