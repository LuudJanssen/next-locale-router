"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanPathSegment = void 0;

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.exec.js");

var cleanPathSegment = function cleanPathSegment(path) {
  return path.replace(/\//g, "");
};

exports.cleanPathSegment = cleanPathSegment;