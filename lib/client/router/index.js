"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = exports.default = void 0;
var singleton_router_1 = require("./singleton-router");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return singleton_router_1.SingletonRouter; } });
var use_router_hook_1 = require("./use-router.hook");
Object.defineProperty(exports, "useRouter", { enumerable: true, get: function () { return use_router_hook_1.useRouter; } });
