"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDebugMode = void 0;
const config_1 = __importDefault(require("../config"));
const isDebugMode = () => {
    const debugFlag = process.env.NEXT_PUBLIC_LOCALE_ROUTER_DEBUG;
    return debugFlag === "true" || config_1.default.debug === true;
};
exports.isDebugMode = isDebugMode;
