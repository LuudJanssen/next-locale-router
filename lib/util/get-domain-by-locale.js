"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomainByLocale = void 0;
const logger_1 = require("../logger");
const domain_contains_locale_1 = require("./domain-contains-locale");
const getDomainByLocale = (domains, locale) => {
    const domain = domains.find((domain) => domain_contains_locale_1.domainContainsLocale(domain, locale));
    if (typeof domain === "undefined") {
        const error = new Error(`Domains in config didn't contain locale "${locale}".`);
        logger_1.logger.error(error);
        throw error;
    }
    return domain;
};
exports.getDomainByLocale = getDomainByLocale;
