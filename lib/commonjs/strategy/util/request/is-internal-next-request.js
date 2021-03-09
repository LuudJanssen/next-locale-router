"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInternalNextRequest = void 0;

require("core-js/modules/es.string.starts-with.js");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _getPathSegments3 = require("../url/get-path-segments");

var isInternalNextRequest = function isInternalNextRequest(url) {
  var _getPathSegments = (0, _getPathSegments3.getPathSegments)(url.pathname),
      _getPathSegments2 = (0, _slicedToArray2["default"])(_getPathSegments, 1),
      _getPathSegments2$ = _getPathSegments2[0],
      firstPathSegment = _getPathSegments2$ === void 0 ? "" : _getPathSegments2$;

  return firstPathSegment.startsWith("_next") || firstPathSegment.startsWith("__next");
};

exports.isInternalNextRequest = isInternalNextRequest;