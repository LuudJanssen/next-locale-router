"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlMatchSubpaths = void 0;

require("core-js/modules/es.array.find.js");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _cleanPathSegment = require("./clean-path-segment");

var _getPathSegments = require("./get-path-segments");

var urlMatchSubpaths = function urlMatchSubpaths(url, subpaths) {
  var pathSegments = (0, _getPathSegments.getPathSegments)(url.pathname); // Default to "/" if there were no path segments

  var _pathSegments = (0, _slicedToArray2["default"])(pathSegments, 1),
      _pathSegments$ = _pathSegments[0],
      expectedLocalePathSegment = _pathSegments$ === void 0 ? "/" : _pathSegments$;

  return subpaths.find(function (_ref) {
    var path = _ref.path;
    return (0, _cleanPathSegment.cleanPathSegment)(expectedLocalePathSegment) === (0, _cleanPathSegment.cleanPathSegment)(path);
  });
};

exports.urlMatchSubpaths = urlMatchSubpaths;