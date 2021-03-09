"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocalePathSegmentsForDomain = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.concat.js");

var _cleanPathSegment = require("../strategy/util/url/clean-path-segment");

var _getLocaleSubpathsForDomains = require("./get-locale-subpaths-for-domains");

var _getLocalesForDomains = require("./get-locales-for-domains");

var getLocalePathSegmentsForDomain = function getLocalePathSegmentsForDomain(domain) {
  var locales = (0, _getLocalesForDomains.getLocalesForDomains)([domain]);
  var localePaths = (0, _getLocaleSubpathsForDomains.getLocaleSubpathsForDomains)([domain]).map(function (path) {
    return (0, _cleanPathSegment.cleanPathSegment)(path);
  });
  return [].concat((0, _toConsumableArray2["default"])(locales), (0, _toConsumableArray2["default"])(localePaths));
};

exports.getLocalePathSegmentsForDomain = getLocalePathSegmentsForDomain;