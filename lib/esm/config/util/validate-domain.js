import _typeof from "@babel/runtime/helpers/typeof";
import { config } from "process";
import isLocale from "validator/lib/isLocale";
import { getObjectType } from "../../util/get-object-type";
import { getSubpathsLocales } from "../../util/get-subpaths-locales";
import { isObject } from "../../util/is-object";
import { ConfigValidationError } from "./config-validation.error";
import { validateSubpath } from "./validate-subpath";
export var validateDomain = function validateDomain(domain, locationPrefix) {
  if (!isObject(domain)) {
    var type = getObjectType(config);
    throw new ConfigValidationError("Each domain in the domains array exported from the config file should be an object. Found ".concat(locationPrefix, " to be \"").concat(type, "\"."));
  }

  if (typeof domain.hostname !== "string") {
    throw new ConfigValidationError("Each domain's hostname should be a string. Found ".concat(locationPrefix, ".hostname to be \"").concat(_typeof(domain.hostname), "\"."));
  }

  if (domain.hostname.includes("http")) {
    throw new ConfigValidationError("Each domain's hostname should not include the protocol (e.g. \"https://\" or \"http://\"). Found ".concat(locationPrefix, ".hostname to contain \"http\"."));
  }

  if (typeof domain.defaultLocale !== "string" || !isLocale(domain.defaultLocale)) {
    throw new ConfigValidationError("Each domain's defaultLocale should be a valid locale. Found ".concat(locationPrefix, ".defaultLocale to be \"").concat(domain.defaultLocale, "\"."));
  }

  if (!Array.isArray(domain.subpaths)) {
    throw new ConfigValidationError("Each domain's subpaths should be an array. Found ".concat(locationPrefix, ".subpaths to be \"").concat(_typeof(domain.subpath), "\"."));
  }

  domain.subpaths.forEach(function (subpath, index) {
    return validateSubpath(subpath, "".concat(locationPrefix, ".subpaths[").concat(index, "]"));
  });
  var locales = getSubpathsLocales(domain.subpaths);

  if (!locales.includes(domain.defaultLocale)) {
    throw new ConfigValidationError("Each domain's defaultLocale should be a locale that is also included in the subpaths. No subpath with locale \"".concat(domain.defaultLocale, "\" exists in ").concat(locationPrefix, ".subpaths."));
  }

  return true;
};