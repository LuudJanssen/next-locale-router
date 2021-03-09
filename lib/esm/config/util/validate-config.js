import _typeof from "@babel/runtime/helpers/typeof";
import isLocale from "validator/lib/isLocale";
import { getLocalesForDomains } from "../../util/get-locales-for-domains";
import { getObjectType } from "../../util/get-object-type";
import { isObject } from "../../util/is-object";
import { ConfigValidationError } from "./config-validation.error";
import { validateDomain } from "./validate-domain";
export var validateConfig = function validateConfig(config) {
  if (!isObject(config)) {
    var type = getObjectType(config);
    throw new ConfigValidationError("The config file should export an object, found \"".concat(type, "\"."));
  }

  if (typeof config.defaultLocale !== "string" || !isLocale(config.defaultLocale)) {
    throw new ConfigValidationError("The defaultLocale exported from the config file should be a valid locale. Found config.defaultLocale to be \"".concat(config.defaultLocale, "\"."));
  }

  if (!Array.isArray(config.domains)) {
    throw new ConfigValidationError("The domains exported from the config file should be an array. Found config.defaultLocale to be \"".concat(_typeof(config.domains), "\"."));
  }

  if (typeof config.debug !== "undefined" && typeof config.debug !== "boolean") {
    throw new ConfigValidationError("The debug flag has to be either undefined or a boolean. Found config.debug to be \"".concat(_typeof(config.debug), "\"."));
  }

  if (typeof config.debug !== "undefined" && typeof config.ignore !== "function") {
    throw new ConfigValidationError("The ignore option has to be either undefined or a boolean. Found config.ignore to be \"".concat(_typeof(config.ignore), "\""));
  }

  config.domains.forEach(function (domain, index) {
    return validateDomain(domain, "config.domains[".concat(index, "]"));
  });
  var locales = getLocalesForDomains(config.domains);

  if (!locales.includes(config.defaultLocale)) {
    throw new ConfigValidationError("The defaultLocale exported from the config file should be a locale that also exists in one of the domains. No domain with locale \"".concat(config.defaultLocale, "\" exists in config.domains."));
  }

  return true;
};