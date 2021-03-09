"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubpathByLocale = void 0;

require("core-js/modules/es.array.find.js");

var _getDomainByLocale = require("./get-domain-by-locale");

var getSubpathByLocale = function getSubpathByLocale(domains, locale) {
  var domain = (0, _getDomainByLocale.getDomainByLocale)(domains, locale);
  return domain.subpaths.find(function (subpath) {
    return subpath.locale === locale;
  });
};

exports.getSubpathByLocale = getSubpathByLocale;