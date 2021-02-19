import isLocale from "validator/lib/isLocale"
import { IConfig } from "../../config.interface"
import { logger } from "../../logger"
import { getObjectType } from "../../util/get-object-type"
import { isObject } from "../../util/is-object"
import { getDomainsLocales } from "./get-domains-locales"
import { validateDomain } from "./validate-domain"

export const validateConfig = (config: any): config is IConfig => {
  if (!isObject(config)) {
    const type = getObjectType(config)
    throw logger.error(`The config file should export an object, found "${type}".`)
  }

  if (typeof config.defaultLocale !== "string" || !isLocale(config.defaultLocale)) {
    throw logger.error(
      `The defaultLocale exported from the config file should be a valid locale. Found config.defaultlocale to be "${config.defaultLocale}".`,
    )
  }

  if (!Array.isArray(config.domains)) {
    throw logger.error(
      `The domains exported from the config file should be an array. Found config.defaultLocale to be "${typeof config.domains}".`,
    )
  }

  for (const [index, domain] of config.domains) {
    validateDomain(domain, `config.domains[${index}]`)
  }

  const locales = getDomainsLocales(config.domains)
  if (!locales.includes(config.defaultlocale)) {
    throw logger.error(
      `The defaultLocale exported from the config file should be a locale that also exists in one of the domains. No domain with locale "${config.defaultLocale}" exists in config.domains.`,
    )
  }

  return true
}
