import { NextConfig } from "next/dist/next-server/server/config"
import { IConfig } from "../config.interface"
import { IDomain } from "../domain.interface"
import { getDomainByHostname } from "../util/get-domain-by-hostname"
import { getDomainByLocale } from "../util/get-domain-by-locale"
import { getLocaleSubpathsForDomains } from "../util/get-locale-subpaths-for-domains"
import { getLocalesForDomains } from "../util/get-locales-for-domains"
import { getSubpathsLocales } from "../util/get-subpaths-locales"
import { alwaysReturn } from "./util/always-return"
import { IgnoreFunction } from "./util/ignore-option.type"

export class Config {
  public readonly domains: IDomain[]
  public readonly defaultLocale: string

  public readonly ignore: IgnoreFunction

  public readonly locales: string[]
  public readonly localeSubpaths: string[]

  constructor(config: IConfig) {
    this.domains = config.domains
    this.defaultLocale = config.defaultLocale

    this.ignore = config.ignore ?? alwaysReturn(false)

    this.locales = getLocalesForDomains(this.domains)
    this.localeSubpaths = getLocaleSubpathsForDomains(this.domains)
  }

  public getDomain(locale: string): IDomain {
    return getDomainByLocale(this.domains, locale)
  }

  public getDomainByHostname(hostname: string): IDomain | undefined {
    return getDomainByHostname(this.domains, hostname)
  }

  public toNextI18nConfig(): NonNullable<NextConfig["i18n"]> {
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

  public toObject(): IConfig {
    return {
      domains: this.domains,
      defaultLocale: this.defaultLocale,
    }
  }

  public toNextI18NextConfig(): NonNullable<NextConfig["i18n"]> {
    const { locales, defaultLocale } = this.toNextI18NextConfig()
    return { locales, defaultLocale }
  }

  public shouldIgnore(url: URL): boolean {
    return this.ignore(url)
  }
}
