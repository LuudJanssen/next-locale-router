"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlMatchRedirects = void 0;

require("core-js/modules/es.array.find.js");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _cleanPathSegment = require("./clean-path-segment");

var _getPathSegments = require("./get-path-segments");

var urlMatchRedirects = function urlMatchRedirects(url, redirects) {
  var pathSegments = (0, _getPathSegments.getPathSegments)(url.pathname);

  var _pathSegments = (0, _slicedToArray2["default"])(pathSegments, 1),
      expectedLocalePathSegment = _pathSegments[0];

  if (typeof expectedLocalePathSegment === "undefined") {
    return undefined;
  }

  return redirects.find(function (_ref) {
    var source = _ref.source;
    return (0, _cleanPathSegment.cleanPathSegment)(source) === expectedLocalePathSegment;
  });
};

exports.urlMatchRedirects = urlMatchRedirects;