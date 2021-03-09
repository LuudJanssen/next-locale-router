"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingletonRouter = void 0;

var _router = _interopRequireDefault(require("next/router"));

var _wrapRouterWithRewrites = require("./util/wrap-router-with-rewrites");

var SingletonRouter = (0, _wrapRouterWithRewrites.wrapRouterWithRewrites)(_router["default"]);
exports.SingletonRouter = SingletonRouter;