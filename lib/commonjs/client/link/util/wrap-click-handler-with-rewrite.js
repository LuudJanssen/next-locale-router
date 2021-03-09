"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapClickHandlerWithRewrite = void 0;

var _router = require("next/router");

var _addRewriteToRouterOnce = require("../../util/add-rewrite-to-router-once");

var wrapClickHandlerWithRewrite = function wrapClickHandlerWithRewrite(onClick, rewrite) {
  var router = (0, _router.useRouter)();

  if (typeof rewrite === "undefined") {
    return onClick;
  }

  return function () {
    (0, _addRewriteToRouterOnce.addRewriteToRouterOnce)(router, rewrite);
    onClick.apply(void 0, arguments);
  };
};

exports.wrapClickHandlerWithRewrite = wrapClickHandlerWithRewrite;