"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRenderQueryParameters = void 0;
const getRenderQueryParameters = (locale, domain) => {
    const defaultLocale = domain.defaultLocale;
    return {
        __nextLocale: locale,
        __nextDefaultLocale: defaultLocale,
    };
};
exports.getRenderQueryParameters = getRenderQueryParameters;
