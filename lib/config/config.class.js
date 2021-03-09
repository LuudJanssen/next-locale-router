"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const get_domain_by_hostname_1 = require("../util/get-domain-by-hostname");
const get_domain_by_locale_1 = require("../util/get-domain-by-locale");
const get_locale_subpaths_for_domains_1 = require("../util/get-locale-subpaths-for-domains");
const get_locales_for_domains_1 = require("../util/get-locales-for-domains");
const get_subpaths_locales_1 = require("../util/get-subpaths-locales");
const always_return_1 = require("./util/always-return");
class Config {
    constructor(config) {
        var _a;
        this.domains = config.domains;
        this.defaultLocale = config.defaultLocale;
        this.ignore = (_a = config.ignore) !== null && _a !== void 0 ? _a : always_return_1.alwaysReturn(false);
        this.locales = get_locales_for_domains_1.getLocalesForDomains(this.domains);
        this.localeSubpaths = get_locale_subpaths_for_domains_1.getLocaleSubpathsForDomains(this.domains);
    }
    getDomain(locale) {
        return get_domain_by_locale_1.getDomainByLocale(this.domains, locale);
    }
    getDomainByHostname(hostname) {
        return get_domain_by_hostname_1.getDomainByHostname(this.domains, hostname);
    }
    toNextI18nConfig() {
        const domains = this.domains.map((domain) => ({
            domain: domain.hostname,
            defaultLocale: domain.defaultLocale,
            locales: get_subpaths_locales_1.getSubpathsLocales(domain.subpaths),
        }));
        return {
            localeDetection: false,
            locales: this.locales,
            defaultLocale: this.defaultLocale,
            domains,
        };
    }
    toObject() {
        return {
            domains: this.domains,
            defaultLocale: this.defaultLocale,
        };
    }
    toNextI18NextConfig() {
        const { locales, defaultLocale } = this.toNextI18NextConfig();
        return { locales, defaultLocale };
    }
    shouldIgnore(url) {
        return this.ignore(url);
    }
}
exports.Config = Config;
