"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapClickHandlerWithRewrite = void 0;
const router_1 = require("next/router");
const add_rewrite_to_router_once_1 = require("../../util/add-rewrite-to-router-once");
const wrapClickHandlerWithRewrite = (onClick, rewrite) => {
    const router = router_1.useRouter();
    if (typeof rewrite === "undefined") {
        return onClick;
    }
    return (...args) => {
        add_rewrite_to_router_once_1.addRewriteToRouterOnce(router, rewrite);
        onClick(...args);
    };
};
exports.wrapClickHandlerWithRewrite = wrapClickHandlerWithRewrite;
