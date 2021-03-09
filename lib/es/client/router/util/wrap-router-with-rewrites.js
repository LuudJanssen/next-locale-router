import { wrapRouterMethodWithLocaleRewrite } from "./wrap-router-method-with-locale-rewrite";
export const wrapRouterWithRewrites = router => {
  const wrappedPush = wrapRouterMethodWithLocaleRewrite(router, "push");
  const wrappedReplace = wrapRouterMethodWithLocaleRewrite(router, "replace");
  return new Proxy(router, {
    get: function (router, prop, receiver) {
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