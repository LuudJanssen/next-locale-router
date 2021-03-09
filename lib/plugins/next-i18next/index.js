"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configToNextI18NextConfig = void 0;
const get_locales_for_domains_1 = require("../../util/get-locales-for-domains");
const configToNextI18NextConfig = (config) => {
    return {
        locales: get_locales_for_domains_1.getLocalesForDomains(config.domains),
        defaultLocale: config.defaultLocale,
    };
};
exports.configToNextI18NextConfig = configToNextI18NextConfig;
