"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderQueryParameters = void 0;

var getRenderQueryParameters = function getRenderQueryParameters(locale, domain) {
  var defaultLocale = domain.defaultLocale;
  return {
    __nextLocale: locale,
    __nextDefaultLocale: defaultLocale
  };
};

exports.getRenderQueryParameters = getRenderQueryParameters;