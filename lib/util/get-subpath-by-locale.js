"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubpathByLocale = void 0;
const get_domain_by_locale_1 = require("./get-domain-by-locale");
const getSubpathByLocale = (domains, locale) => {
    const domain = get_domain_by_locale_1.getDomainByLocale(domains, locale);
    return domain.subpaths.find((subpath) => subpath.locale === locale);
};
exports.getSubpathByLocale = getSubpathByLocale;
