"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRouterMethodWithLocaleRewrite = void 0;
const add_rewrite_to_router_once_1 = require("../../util/add-rewrite-to-router-once");
const use_locale_redirect_hook_1 = require("../../util/use-locale-redirect.hook");
const update_as_parameter_with_locale_1 = require("./update-as-parameter-with-locale");
const wrapRouterMethodWithLocaleRewrite = (router, method) => (...args) => {
    const [url, as, options] = args;
    const redirectForLocale = use_locale_redirect_hook_1.useLocaleRedirect(router.locale);
    const asWithLocale = update_as_parameter_with_locale_1.updateAsParameterWithLocale(as, redirectForLocale);
    add_rewrite_to_router_once_1.addRewriteToRouterOnce(router, redirectForLocale);
    return router[method](url, asWithLocale, options);
};
exports.wrapRouterMethodWithLocaleRewrite = wrapRouterMethodWithLocaleRewrite;
