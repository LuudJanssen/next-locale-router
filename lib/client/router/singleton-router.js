"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonRouter = void 0;
const router_1 = __importDefault(require("next/router"));
const wrap_router_with_rewrites_1 = require("./util/wrap-router-with-rewrites");
exports.SingletonRouter = wrap_router_with_rewrites_1.wrapRouterWithRewrites(router_1.default);
