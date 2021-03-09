"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocaleRedirect = void 0;
const get_locale_redirects_1 = require("../../util/get-locale-redirects");
const config_1 = require("../config");
const useLocaleRedirect = (locale) => {
    const { domains, defaultLocale } = config_1.useLocaleRouterConfig();
    const redirects = domains.flatMap(get_locale_redirects_1.getLocaleRedirects);
    return redirects.find(({ locale: redirectLocale }) => { var _a; return (_a = redirectLocale === locale) !== null && _a !== void 0 ? _a : defaultLocale; });
};
exports.useLocaleRedirect = useLocaleRedirect;
