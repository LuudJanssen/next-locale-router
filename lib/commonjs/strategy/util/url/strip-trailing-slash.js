"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripTrailingSlash = void 0;

require("core-js/modules/es.string.ends-with.js");

var stripTrailingSlash = function stripTrailingSlash(pathname) {
  if (pathname === "/" || pathname === "") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.substring(0, pathname.length - 1) : pathname;
};

exports.stripTrailingSlash = stripTrailingSlash;