import isLocale from "validator/lib/isLocale";
import { getObjectType } from "../../util/get-object-type";
import { isObject } from "../../util/is-object";
import { ConfigValidationError } from "./config-validation.error";
export const validateSubpath = (subpath, locationPrefix) => {
  if (!isObject(subpath)) {
    const type = getObjectType(subpath);
    throw new ConfigValidationError(`Each subpath in a domain should be an object. Found ${locationPrefix} to be "${type}".`);
  }

  if (typeof subpath.path !== "string") {
    throw new ConfigValidationError(`A subpath's path should be a valid string. Found ${locationPrefix}.path to be "${typeof subpath.path}".`);
  }

  if (!subpath.path.startsWith("/") || !subpath.path.endsWith("/")) {
    throw new ConfigValidationError(`A subpath's path should always start with a slash and end with a slash. Found "${subpath.path}" for ${locationPrefix}.path.`);
  }

  if (typeof subpath.locale !== "string" || !isLocale(subpath.locale)) {
    throw new ConfigValidationError(`A subpath's locale should be a valid locale. Found ${locationPrefix}.locale to be ${subpath.locale}`);
  }

  return true;
};