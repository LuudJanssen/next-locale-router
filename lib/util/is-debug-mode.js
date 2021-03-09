"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDebugMode = void 0;
const isDebugMode = () => process.env.NEXT_PUBLIC_LOCALE_ROUTER_DEBUG === "true";
exports.isDebugMode = isDebugMode;
