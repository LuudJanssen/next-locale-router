"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subpathNeedsRedirect = void 0;

require("core-js/modules/es.string.starts-with.js");

var subpathNeedsRedirect = function subpathNeedsRedirect(url, subpath) {
  return !url.pathname.startsWith(subpath.path);
};

exports.subpathNeedsRedirect = subpathNeedsRedirect;