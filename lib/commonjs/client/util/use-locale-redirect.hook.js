"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocaleRedirect = void 0;

require("core-js/modules/es.array.flat-map.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

require("core-js/modules/es.array.find.js");

var _getLocaleRedirects = require("../../util/get-locale-redirects");

var _config = require("../config");

var useLocaleRedirect = function useLocaleRedirect(locale) {
  var _useLocaleRouterConfi = (0, _config.useLocaleRouterConfig)(),
      domains = _useLocaleRouterConfi.domains,
      defaultLocale = _useLocaleRouterConfi.defaultLocale;

  var redirects = domains.flatMap(_getLocaleRedirects.getLocaleRedirects);
  return redirects.find(function (_ref) {
    var _ref2;

    var redirectLocale = _ref.locale;
    return (_ref2 = redirectLocale === locale) !== null && _ref2 !== void 0 ? _ref2 : defaultLocale;
  });
};

exports.useLocaleRedirect = useLocaleRedirect;