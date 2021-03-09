"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useLocaleRouterConfig", {
  enumerable: true,
  get: function get() {
    return _useConfig.useConfig;
  }
});

var _useConfig = require("./use-config.hook");