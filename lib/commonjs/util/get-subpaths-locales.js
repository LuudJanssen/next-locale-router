"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubpathsLocales = void 0;

require("core-js/modules/es.array.map.js");

var getSubpathsLocales = function getSubpathsLocales(subpaths) {
  return subpaths.map(function (subpath) {
    return subpath.locale;
  });
};

exports.getSubpathsLocales = getSubpathsLocales;