"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapRouterMethodWithLocaleRewrite = void 0;

var _addRewriteToRouterOnce = require("../../util/add-rewrite-to-router-once");

var _useLocaleRedirect = require("../../util/use-locale-redirect.hook");

var wrapRouterMethodWithLocaleRewrite = function wrapRouterMethodWithLocaleRewrite(router, method) {
  return function () {
    var redirectForLocale = (0, _useLocaleRedirect.useLocaleRedirect)(router.locale);
    (0, _addRewriteToRouterOnce.addRewriteToRouterOnce)(router, redirectForLocale);
    return router[method].apply(router, arguments);
  };
};

exports.wrapRouterMethodWithLocaleRewrite = wrapRouterMethodWithLocaleRewrite;