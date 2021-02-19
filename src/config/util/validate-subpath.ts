import isLocale from "validator/lib/isLocale"
import { logger } from "../../logger"
import { ISubpath } from "../../subpath.interface"
import { getObjectType } from "../../util/get-object-type"
import { isObject } from "../../util/is-object"

export const validateSubpath = (subpath: any, locationPrefix: string): subpath is ISubpath => {
  if (!isObject(subpath)) {
    const type = getObjectType(subpath)
    throw logger.error(
      `Each subpath in a domain should be an object. Found ${locationPrefix} to be "${type}".`,
    )
  }

  if (typeof subpath.path !== "string") {
    throw logger.error(
      `A subpath's path should be a valid string. Found ${locationPrefix}.path to be "${typeof subpath.path}".`,
    )
  }

  if (!subpath.path.startsWith("/") || !subpath.path.endsWith("/")) {
    throw logger.error(
      `A subpath's path should always start with a slash and end with a slash. Found "${subpath.path}" for ${locationPrefix}.path.`,
    )
  }

  if (typeof subpath.locale !== "string" || !isLocale(subpath.locale)) {
    throw logger.error(
      `A subpath's locale should be a valid locale. Found ${locationPrefix}.locale to be ${subpath.locale}`,
    )
  }

  return true
}
