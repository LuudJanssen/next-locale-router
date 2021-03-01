import isLocale from "validator/lib/isLocale"
import { IConfig } from "../../config.interface"
import { getLocalesForDomains } from "../../util/get-locales-for-domains"
import { getObjectType } from "../../util/get-object-type"
import { isObject } from "../../util/is-object"
import { ConfigValidationError } from "./config-validation.error"
import { validateDomain } from "./validate-domain"

export const validateConfig = (config: any): config is IConfig => {
  if (!isObject(config)) {
    const type = getObjectType(config)
    throw new ConfigValidationError(`The config file should export an object, found "${type}".`)
  }

  if (typeof config.defaultLocale !== "string" || !isLocale(config.defaultLocale)) {
    throw new ConfigValidationError(
      `The defaultLocale exported from the config file should be a valid locale. Found config.defaultLocale to be "${config.defaultLocale}".`,
    )
  }

  if (!Array.isArray(config.domains)) {
    throw new ConfigValidationError(
      `The domains exported from the config file should be an array. Found config.defaultLocale to be "${typeof config.domains}".`,
    )
  }

  config.domains.forEach((domain, index) => validateDomain(domain, `config.domains[${index}]`))

  const locales = getLocalesForDomains(config.domains)
  if (!locales.includes(config.defaultLocale)) {
    throw new ConfigValidationError(
      `The defaultLocale exported from the config file should be a locale that also exists in one of the domains. No domain with locale "${config.defaultLocale}" exists in config.domains.`,
    )
  }

  return true
}
