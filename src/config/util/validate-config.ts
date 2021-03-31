import isLocale from "validator/lib/isLocale"
import { getLocalesForDomains } from "../../server/util/get-locales-for-domains"
import { getObjectType } from "../../server/util/get-object-type"
import { isObject } from "../../server/util/is-object"
import { IConfig } from "../config.interface"
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

  if (typeof config.debug !== "undefined" && typeof config.debug !== "boolean") {
    throw new ConfigValidationError(
      `The debug flag has to be either undefined or a boolean. Found config.debug to be "${typeof config.debug}".`,
    )
  }

  if (typeof config.debug !== "undefined" && typeof config.ignore !== "function") {
    throw new ConfigValidationError(
      `The ignore option has to be either undefined or a boolean. Found config.ignore to be "${typeof config.ignore}"`,
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
