"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocalesForDomains = void 0;

require("core-js/modules/es.array.flat-map.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

var _getSubpathsLocales = require("./get-subpaths-locales");

var getLocalesForDomains = function getLocalesForDomains(domains) {
  return domains.flatMap(function (domain) {
    return (0, _getSubpathsLocales.getSubpathsLocales)(domain.subpaths);
  });
};

exports.getLocalesForDomains = getLocalesForDomains;