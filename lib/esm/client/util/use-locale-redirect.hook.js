import { getLocaleRedirects } from "../../util/get-locale-redirects";
import { useLocaleRouterConfig } from "../config";
export var useLocaleRedirect = function useLocaleRedirect(locale) {
  var _useLocaleRouterConfi = useLocaleRouterConfig(),
      domains = _useLocaleRouterConfi.domains,
      defaultLocale = _useLocaleRouterConfi.defaultLocale;

  var redirects = domains.flatMap(getLocaleRedirects);
  return redirects.find(function (_ref) {
    var _ref2;

    var redirectLocale = _ref.locale;
    return (_ref2 = redirectLocale === locale) !== null && _ref2 !== void 0 ? _ref2 : defaultLocale;
  });
};