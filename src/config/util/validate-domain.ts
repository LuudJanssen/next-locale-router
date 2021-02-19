import { config } from "process"
import isLocale from "validator/lib/isLocale"
import { IDomain } from "../../domain.interface"
import { logger } from "../../logger"
import { getObjectType } from "../../util/get-object-type"
import { isObject } from "../../util/is-object"
import { getSubpathsLocales } from "./get-subpaths-locales"
import { validateSubpath } from "./validate-subpath"

export const validateDomain = (domain: any, locationPrefix: string): domain is IDomain => {
  if (!isObject(domain)) {
    const type = getObjectType(config)
    throw logger.error(
      `Each domain in the domains array exported from the config file should be an object. Found ${locationPrefix} to be "${type}".`,
    )
  }

  if (typeof domain.hostname !== "string") {
    throw logger.error(
      `Each domain's hostname should be a string. Found ${locationPrefix}.hostname to be "${typeof domain.hostname}".`,
    )
  }

  if (domain.hostname.includes("http")) {
    throw logger.error(
      `Each domain's hostname should not include the protocol (e.g. "https://" or "http://"). Found ${locationPrefix}.hostname to contain "http".`,
    )
  }

  if (typeof domain.defaultLocale !== "string" || !isLocale(domain.defaultLocale)) {
    throw logger.error(
      `Each domain's defaultLocale should be a valid locale. ${locationPrefix}.defaultLocale to be "${domain.defaultLocale}".`,
    )
  }

  if (!Array.isArray(domain.subpaths)) {
    throw logger.error(
      `Each domain's subpaths should be an array. Found ${locationPrefix}.subpaths to be "${typeof domain.subpath}".`,
    )
  }

  domain.subpaths.forEach((subpath, index) =>
    validateSubpath(subpath, `${locationPrefix}.subpaths[${index}]`),
  )

  const locales = getSubpathsLocales(domain.subpaths)
  if (!locales.includes(domain.defaultLocale)) {
    throw logger.error(
      `Each domain's defaultLocale should be a locale that is also included in the subpaths. No subpath with locale "${domain.defaultlocale}" exists in ${locationPrefix}.subpaths.`,
    )
  }

  return true
}
