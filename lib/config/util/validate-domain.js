"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDomain = void 0;
const process_1 = require("process");
const isLocale_1 = __importDefault(require("validator/lib/isLocale"));
const get_object_type_1 = require("../../util/get-object-type");
const get_subpaths_locales_1 = require("../../util/get-subpaths-locales");
const is_object_1 = require("../../util/is-object");
const config_validation_error_1 = require("./config-validation.error");
const validate_subpath_1 = require("./validate-subpath");
const validateDomain = (domain, locationPrefix) => {
    if (!is_object_1.isObject(domain)) {
        const type = get_object_type_1.getObjectType(process_1.config);
        throw new config_validation_error_1.ConfigValidationError(`Each domain in the domains array exported from the config file should be an object. Found ${locationPrefix} to be "${type}".`);
    }
    if (typeof domain.hostname !== "string") {
        throw new config_validation_error_1.ConfigValidationError(`Each domain's hostname should be a string. Found ${locationPrefix}.hostname to be "${typeof domain.hostname}".`);
    }
    if (domain.hostname.includes("http")) {
        throw new config_validation_error_1.ConfigValidationError(`Each domain's hostname should not include the protocol (e.g. "https://" or "http://"). Found ${locationPrefix}.hostname to contain "http".`);
    }
    if (typeof domain.defaultLocale !== "string" || !isLocale_1.default(domain.defaultLocale)) {
        throw new config_validation_error_1.ConfigValidationError(`Each domain's defaultLocale should be a valid locale. Found ${locationPrefix}.defaultLocale to be "${domain.defaultLocale}".`);
    }
    if (!Array.isArray(domain.subpaths)) {
        throw new config_validation_error_1.ConfigValidationError(`Each domain's subpaths should be an array. Found ${locationPrefix}.subpaths to be "${typeof domain.subpath}".`);
    }
    domain.subpaths.forEach((subpath, index) => validate_subpath_1.validateSubpath(subpath, `${locationPrefix}.subpaths[${index}]`));
    const locales = get_subpaths_locales_1.getSubpathsLocales(domain.subpaths);
    if (!locales.includes(domain.defaultLocale)) {
        throw new config_validation_error_1.ConfigValidationError(`Each domain's defaultLocale should be a locale that is also included in the subpaths. No subpath with locale "${domain.defaultLocale}" exists in ${locationPrefix}.subpaths.`);
    }
    return true;
};
exports.validateDomain = validateDomain;
