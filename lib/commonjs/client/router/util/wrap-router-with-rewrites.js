"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapRouterWithRewrites = void 0;

require("core-js/modules/es.reflect.get.js");

var _wrapRouterMethodWithLocaleRewrite = require("./wrap-router-method-with-locale-rewrite");

var wrapRouterWithRewrites = function wrapRouterWithRewrites(router) {
  var wrappedPush = (0, _wrapRouterMethodWithLocaleRewrite.wrapRouterMethodWithLocaleRewrite)(router, "push");
  var wrappedReplace = (0, _wrapRouterMethodWithLocaleRewrite.wrapRouterMethodWithLocaleRewrite)(router, "replace");
  return new Proxy(router, {
    get: function get(router, prop, receiver) {
      if (prop === "push") {
        return wrappedPush;
      }

      if (prop === "replace") {
        return wrappedReplace;
      }

      return Reflect.get(router, prop, receiver);
    }
  });
};

exports.wrapRouterWithRewrites = wrapRouterWithRewrites;