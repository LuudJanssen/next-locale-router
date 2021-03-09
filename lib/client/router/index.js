"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = exports.default = void 0;
__exportStar(require("next/router"), exports);
var singleton_router_1 = require("./singleton-router");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return singleton_router_1.SingletonRouter; } });
var use_router_hook_1 = require("./use-router.hook");
Object.defineProperty(exports, "useRouter", { enumerable: true, get: function () { return use_router_hook_1.useRouter; } });
