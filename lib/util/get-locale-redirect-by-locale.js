"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleRedirectByLocale = void 0;
const get_domain_by_locale_1 = require("./get-domain-by-locale");
const get_locale_redirects_1 = require("./get-locale-redirects");
const getLocaleRedirectByLocale = (domains, locale) => {
    const domain = get_domain_by_locale_1.getDomainByLocale(domains, locale);
    const localeRedirects = get_locale_redirects_1.getLocaleRedirects(domain);
    return localeRedirects.find(({ locale: redirectLocale }) => redirectLocale === locale);
};
exports.getLocaleRedirectByLocale = getLocaleRedirectByLocale;
