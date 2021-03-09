"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocalePathSegment = void 0;

require("core-js/modules/es.array.flat-map.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _getLocalePathSegmentsForLocale = require("../../../util/get-locale-path-segments-for-locale");

var _getPathSegments = require("./get-path-segments");

var getLocalePathSegment = function getLocalePathSegment(validDomains, url) {
  var pathSegments = (0, _getPathSegments.getPathSegments)(url.pathname);

  var _pathSegments = (0, _slicedToArray2["default"])(pathSegments, 1),
      expectedLocalePathSegment = _pathSegments[0];

  if (typeof expectedLocalePathSegment === "undefined") {
    return undefined;
  }

  var localePathSegments = validDomains.flatMap(_getLocalePathSegmentsForLocale.getLocalePathSegmentsForDomain);
  var isLocaleRelatedSegment = localePathSegments.includes(expectedLocalePathSegment);

  if (!isLocaleRelatedSegment) {
    return undefined;
  }

  return expectedLocalePathSegment;
};

exports.getLocalePathSegment = getLocalePathSegment;