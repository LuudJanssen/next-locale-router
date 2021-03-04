"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainContainsLocale = void 0;
const get_locales_for_domains_1 = require("./get-locales-for-domains");
const domainContainsLocale = (domain, locale) => get_locales_for_domains_1.getLocalesForDomains([domain]).includes(locale);
exports.domainContainsLocale = domainContainsLocale;
