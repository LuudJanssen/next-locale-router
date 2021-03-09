"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePathnameWithRedirect = void 0;

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.concat.js");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _cleanPathSegment = require("./clean-path-segment");

var _getPathSegments3 = require("./get-path-segments");

var updatePathnameWithRedirect = function updatePathnameWithRedirect(pathname, redirect) {
  if ((0, _isNil["default"])(pathname)) {
    return redirect.destination;
  }

  var _getPathSegments = (0, _getPathSegments3.getPathSegments)(pathname),
      _getPathSegments2 = (0, _toArray2["default"])(_getPathSegments),
      firstPathSegment = _getPathSegments2[0],
      pathSegments = _getPathSegments2.slice(1);

  var destinationPathSegment = (0, _cleanPathSegment.cleanPathSegment)(redirect.destination);
  var destinationPathSegments = destinationPathSegment ? [destinationPathSegment] : [];

  if (firstPathSegment === (0, _cleanPathSegment.cleanPathSegment)(redirect.source)) {
    return "/" + [].concat(destinationPathSegments, (0, _toConsumableArray2["default"])(pathSegments)).join("/");
  }

  return "/" + [].concat(destinationPathSegments, [firstPathSegment], (0, _toConsumableArray2["default"])(pathSegments)).join("/");
};

exports.updatePathnameWithRedirect = updatePathnameWithRedirect;