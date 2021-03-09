"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocaleRedirects = void 0;

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.map.js");

var getLocaleRedirects = function getLocaleRedirects(domain) {
  return domain.subpaths.map(function (_ref) {
    var locale = _ref.locale,
        path = _ref.path;
    return {
      source: "/".concat(locale, "/"),
      locale: locale,
      destination: path
    };
  }).filter(function (_ref2) {
    var source = _ref2.source,
        destination = _ref2.destination;
    return source !== destination;
  });
};

exports.getLocaleRedirects = getLocaleRedirects;