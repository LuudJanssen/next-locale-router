import { IConfig } from "../config.interface"
import { IDomain } from "../domain.interface"
import { getDomainByLocale } from "./util/get-domain-for-locale"
import { getDomainsLocales } from "./util/get-domains-locales"
import { getLocaleSubpathsForDomains } from "./util/get-locale-subpaths-for-domains"
import { getSubpathsLocales } from "./util/get-subpaths-locales"
import { NextI18nConfig } from "./util/next-i18n-config.type"

export class Config {
  public readonly domains: IDomain[]
  public readonly defaultLocale: string
  public readonly locales: string[]
  public readonly localeSubpaths: string[]

  constructor(config: IConfig) {
    this.domains = config.domains
    this.defaultLocale = config.defaultLocale

    this.locales = getDomainsLocales(this.domains)
    this.localeSubpaths = getLocaleSubpathsForDomains(this.domains)
  }

  public getDomain(locale: string) {
    return getDomainByLocale(this.domains, locale)
  }

  public toNextI18nConfig(): NextI18nConfig {
    const domains = this.domains.map((domain) => ({
      domain: domain.hostname,
      defaultLocale: domain.defaultLocale,
      locales: getSubpathsLocales(domain.subpaths),
    }))

    return {
      localeDetection: false,
      locales: this.locales,
      defaultLocale: this.defaultLocale,
      domains,
    }
  }
}
