"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathSegments = void 0;

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.regexp.exec.js");

var getPathSegments = function getPathSegments(pathname) {
  return pathname.split("/").filter(function (segment) {
    return segment !== "";
  });
};

exports.getPathSegments = getPathSegments;