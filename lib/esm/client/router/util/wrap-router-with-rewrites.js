import { wrapRouterMethodWithLocaleRewrite } from "./wrap-router-method-with-locale-rewrite";
export var wrapRouterWithRewrites = function wrapRouterWithRewrites(router) {
  var wrappedPush = wrapRouterMethodWithLocaleRewrite(router, "push");
  var wrappedReplace = wrapRouterMethodWithLocaleRewrite(router, "replace");
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