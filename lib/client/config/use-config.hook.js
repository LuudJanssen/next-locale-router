"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfig = void 0;
const config_1 = __importDefault(require("next/config"));
const config_runtime_key_constant_1 = require("../../constants/config-runtime-key.constant");
const useConfig = () => {
    const { publicRuntimeConfig } = config_1.default();
    return publicRuntimeConfig[config_runtime_key_constant_1.CONFIG_RUNTIME_KEY];
};
exports.useConfig = useConfig;
