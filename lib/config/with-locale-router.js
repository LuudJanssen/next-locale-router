"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLocaleRouter = void 0;
const config_runtime_key_constant_1 = require("../constants/config-runtime-key.constant");
const index_1 = __importDefault(require("./index"));
const withLocaleRouter = () => (nextConfig = {}) => {
    var _a;
    return {
        ...nextConfig,
        i18n: index_1.default.toNextI18nConfig(),
        publicRuntimeConfig: {
            ...((_a = nextConfig.publicRuntimeConfig) !== null && _a !== void 0 ? _a : {}),
            [config_runtime_key_constant_1.CONFIG_RUNTIME_KEY]: index_1.default.toObject(),
        },
    };
};
exports.withLocaleRouter = withLocaleRouter;
