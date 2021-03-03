"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSubpath = void 0;
const isLocale_1 = __importDefault(require("validator/lib/isLocale"));
const get_object_type_1 = require("../../util/get-object-type");
const is_object_1 = require("../../util/is-object");
const config_validation_error_1 = require("./config-validation.error");
const validateSubpath = (subpath, locationPrefix) => {
    if (!is_object_1.isObject(subpath)) {
        const type = get_object_type_1.getObjectType(subpath);
        throw new config_validation_error_1.ConfigValidationError(`Each subpath in a domain should be an object. Found ${locationPrefix} to be "${type}".`);
    }
    if (typeof subpath.path !== "string") {
        throw new config_validation_error_1.ConfigValidationError(`A subpath's path should be a valid string. Found ${locationPrefix}.path to be "${typeof subpath.path}".`);
    }
    if (!subpath.path.startsWith("/") || !subpath.path.endsWith("/")) {
        throw new config_validation_error_1.ConfigValidationError(`A subpath's path should always start with a slash and end with a slash. Found "${subpath.path}" for ${locationPrefix}.path.`);
    }
    if (typeof subpath.locale !== "string" || !isLocale_1.default(subpath.locale)) {
        throw new config_validation_error_1.ConfigValidationError(`A subpath's locale should be a valid locale. Found ${locationPrefix}.locale to be ${subpath.locale}`);
    }
    return true;
};
exports.validateSubpath = validateSubpath;
