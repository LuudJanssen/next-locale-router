"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "extractNextLocaleCookie", {
  enumerable: true,
  get: function get() {
    return _detectLocaleCookie.detectLocaleCookie;
  }
});

var _detectLocaleCookie = require("next/dist/next-server/lib/i18n/detect-locale-cookie");