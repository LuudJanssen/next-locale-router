import { createNexti18nConfig } from "../util/create-next-config"
import { bootstrap } from "./bootstrap"
import { getDomainByLocale } from "./util/get-domain-for-locale"
import { getDomainsLocales } from "./util/get-domains-locales"
import { getLocaleSubpathsForDomains } from "./util/get-locale-subpaths-for-domains"

const config = bootstrap()

export const locales = getDomainsLocales(config.domains)
export const localeSubpaths = getLocaleSubpathsForDomains(config.domains)
export const { defaultLocale, domains } = config
export const toNextI18nConfig = () => createNexti18nConfig(config)
export const getDomain = (locale: string) => getDomainByLocale(config.domains, locale)
