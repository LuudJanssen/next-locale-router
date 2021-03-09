"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRouterWithRewrites = void 0;
const wrap_router_method_with_locale_rewrite_1 = require("./wrap-router-method-with-locale-rewrite");
const wrapRouterWithRewrites = (router) => {
    const wrappedPush = wrap_router_method_with_locale_rewrite_1.wrapRouterMethodWithLocaleRewrite(router, "push");
    const wrappedReplace = wrap_router_method_with_locale_rewrite_1.wrapRouterMethodWithLocaleRewrite(router, "replace");
    return new Proxy(router, {
        get: function (router, prop, receiver) {
            if (prop === "push") {
                return wrappedPush;
            }
            if (prop === "replace") {
                return wrappedReplace;
            }
            return Reflect.get(router, prop, receiver);
        },
    });
};
exports.wrapRouterWithRewrites = wrapRouterWithRewrites;
