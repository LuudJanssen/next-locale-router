"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
const router_1 = require("next/router");
const wrap_router_with_rewrites_1 = require("./util/wrap-router-with-rewrites");
const useRouter = () => {
    const nextRouter = router_1.useRouter();
    return wrap_router_with_rewrites_1.wrapRouterWithRewrites(nextRouter);
};
exports.useRouter = useRouter;
