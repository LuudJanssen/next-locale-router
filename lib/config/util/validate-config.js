"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = void 0;
const isLocale_1 = __importDefault(require("validator/lib/isLocale"));
const get_locales_for_domains_1 = require("../../util/get-locales-for-domains");
const get_object_type_1 = require("../../util/get-object-type");
const is_object_1 = require("../../util/is-object");
const config_validation_error_1 = require("./config-validation.error");
const validate_domain_1 = require("./validate-domain");
const validateConfig = (config) => {
    if (!is_object_1.isObject(config)) {
        const type = get_object_type_1.getObjectType(config);
        throw new config_validation_error_1.ConfigValidationError(`The config file should export an object, found "${type}".`);
    }
    if (typeof config.defaultLocale !== "string" || !isLocale_1.default(config.defaultLocale)) {
        throw new config_validation_error_1.ConfigValidationError(`The defaultLocale exported from the config file should be a valid locale. Found config.defaultLocale to be "${config.defaultLocale}".`);
    }
    if (!Array.isArray(config.domains)) {
        throw new config_validation_error_1.ConfigValidationError(`The domains exported from the config file should be an array. Found config.defaultLocale to be "${typeof config.domains}".`);
    }
    if (typeof config.debug !== "undefined" && typeof config.debug !== "boolean") {
        throw new config_validation_error_1.ConfigValidationError(`The debug flag has to be either undefined or a boolean. Found config.debug to be "${typeof config.debug}".`);
    }
    if (typeof config.debug !== "undefined" && typeof config.ignore !== "function") {
        throw new config_validation_error_1.ConfigValidationError(`The ignore option has to be either undefined or a boolean. Found config.ignore to be "${typeof config.ignore}"`);
    }
    config.domains.forEach((domain, index) => validate_domain_1.validateDomain(domain, `config.domains[${index}]`));
    const locales = get_locales_for_domains_1.getLocalesForDomains(config.domains);
    if (!locales.includes(config.defaultLocale)) {
        throw new config_validation_error_1.ConfigValidationError(`The defaultLocale exported from the config file should be a locale that also exists in one of the domains. No domain with locale "${config.defaultLocale}" exists in config.domains.`);
    }
    return true;
};
exports.validateConfig = validateConfig;
