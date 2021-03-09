import _typeof from "@babel/runtime/helpers/typeof";
import isLocale from "validator/lib/isLocale";
import { getObjectType } from "../../util/get-object-type";
import { isObject } from "../../util/is-object";
import { ConfigValidationError } from "./config-validation.error";
export var validateSubpath = function validateSubpath(subpath, locationPrefix) {
  if (!isObject(subpath)) {
    var type = getObjectType(subpath);
    throw new ConfigValidationError("Each subpath in a domain should be an object. Found ".concat(locationPrefix, " to be \"").concat(type, "\"."));
  }

  if (typeof subpath.path !== "string") {
    throw new ConfigValidationError("A subpath's path should be a valid string. Found ".concat(locationPrefix, ".path to be \"").concat(_typeof(subpath.path), "\"."));
  }

  if (!subpath.path.startsWith("/") || !subpath.path.endsWith("/")) {
    throw new ConfigValidationError("A subpath's path should always start with a slash and end with a slash. Found \"".concat(subpath.path, "\" for ").concat(locationPrefix, ".path."));
  }

  if (typeof subpath.locale !== "string" || !isLocale(subpath.locale)) {
    throw new ConfigValidationError("A subpath's locale should be a valid locale. Found ".concat(locationPrefix, ".locale to be ").concat(subpath.locale));
  }

  return true;
};