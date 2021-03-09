"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocaleSubpathsForDomains = void 0;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.flat-map.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

var getLocaleSubpathsForDomains = function getLocaleSubpathsForDomains(domains) {
  return domains.flatMap(function (domain) {
    return domain.subpaths;
  }).map(function (subpath) {
    return subpath.path;
  });
};

exports.getLocaleSubpathsForDomains = getLocaleSubpathsForDomains;