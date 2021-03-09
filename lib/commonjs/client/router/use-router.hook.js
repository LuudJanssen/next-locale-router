"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRouter = void 0;

var _router = require("next/router");

var _wrapRouterWithRewrites = require("./util/wrap-router-with-rewrites");

var useRouter = function useRouter() {
  var nextRouter = (0, _router.useRouter)();
  return (0, _wrapRouterWithRewrites.wrapRouterWithRewrites)(nextRouter);
};

exports.useRouter = useRouter;