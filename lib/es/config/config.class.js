import { getDomainByHostname } from "../util/get-domain-by-hostname";
import { getDomainByLocale } from "../util/get-domain-by-locale";
import { getLocaleSubpathsForDomains } from "../util/get-locale-subpaths-for-domains";
import { getLocalesForDomains } from "../util/get-locales-for-domains";
import { getSubpathByLocale } from "../util/get-subpath-by-locale";
import { getSubpathsLocales } from "../util/get-subpaths-locales";
import { alwaysReturn } from "./util/always-return";
export class Config {
  constructor(config) {
    this.domains = config.domains;
    this.defaultLocale = config.defaultLocale;
    this.ignore = config.ignore ?? alwaysReturn(false);
    this.locales = getLocalesForDomains(this.domains);
    this.localeSubpaths = getLocaleSubpathsForDomains(this.domains);
  }

  getDomain(locale) {
    return getDomainByLocale(this.domains, locale);
  }

  getDomainByHostname(hostname) {
    return getDomainByHostname(this.domains, hostname);
  }

  getSubpath(locale) {
    return getSubpathByLocale(this.domains, locale);
  }

  toNextI18nConfig() {
    const domains = this.domains.map(domain => ({
      domain: domain.hostname,
      defaultLocale: domain.defaultLocale,
      locales: getSubpathsLocales(domain.subpaths)
    }));
    return {
      localeDetection: false,
      locales: this.locales,
      defaultLocale: this.defaultLocale,
      domains
    };
  }

  toObject() {
    return {
      domains: this.domains,
      defaultLocale: this.defaultLocale
    };
  }

  toNextI18NextConfig() {
    const {
      locales,
      defaultLocale
    } = this.toNextI18NextConfig();
    return {
      locales,
      defaultLocale
    };
  }

  shouldIgnore(url) {
    return this.ignore(url);
  }

}