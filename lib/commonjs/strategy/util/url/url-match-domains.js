"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlMatchDomains = void 0;

require("core-js/modules/es.array.find.js");

var _getLocalePathSegment = require("./get-locale-path-segment");

var urlMatchDomains = function urlMatchDomains(url, domains) {
  return domains.find(function (domain) {
    return typeof (0, _getLocalePathSegment.getLocalePathSegment)([domain], url) !== "undefined";
  });
};

exports.urlMatchDomains = urlMatchDomains;