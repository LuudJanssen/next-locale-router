"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocaleRedirectByLocale = void 0;

require("core-js/modules/es.array.find.js");

var _getDomainByLocale = require("./get-domain-by-locale");

var _getLocaleRedirects = require("./get-locale-redirects");

var getLocaleRedirectByLocale = function getLocaleRedirectByLocale(domains, locale) {
  var domain = (0, _getDomainByLocale.getDomainByLocale)(domains, locale);
  var localeRedirects = (0, _getLocaleRedirects.getLocaleRedirects)(domain);
  return localeRedirects.find(function (_ref) {
    var redirectLocale = _ref.locale;
    return redirectLocale === locale;
  });
};

exports.getLocaleRedirectByLocale = getLocaleRedirectByLocale;