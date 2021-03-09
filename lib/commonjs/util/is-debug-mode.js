"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDebugMode = void 0;

var isDebugMode = function isDebugMode() {
  return process.env.NEXT_PUBLIC_LOCALE_ROUTER_DEBUG === "true";
};

exports.isDebugMode = isDebugMode;