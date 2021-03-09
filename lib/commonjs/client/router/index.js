"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _singletonRouter.SingletonRouter;
  }
});
Object.defineProperty(exports, "useRouter", {
  enumerable: true,
  get: function get() {
    return _useRouter.useRouter;
  }
});

var _singletonRouter = require("./singleton-router");

var _useRouter = require("./use-router.hook");