"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domainContainsLocale = void 0;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _getLocalesForDomains = require("./get-locales-for-domains");

var domainContainsLocale = function domainContainsLocale(domain, locale) {
  return (0, _getLocalesForDomains.getLocalesForDomains)([domain]).includes(locale);
};

exports.domainContainsLocale = domainContainsLocale;