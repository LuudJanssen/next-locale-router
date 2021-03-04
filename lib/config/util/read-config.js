"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readConfig = void 0;
const logger_1 = require("../../logger");
const is_debug_mode_1 = require("../../util/is-debug-mode");
const config_validation_error_1 = require("./config-validation.error");
const validate_config_1 = require("./validate-config");
const readConfig = (path) => {
    if (is_debug_mode_1.isDebugMode()) {
        logger_1.logger.debug(`Reading config from "${path}"`);
    }
    let config;
    try {
        config = require(path);
    }
    catch (error) {
        logger_1.logger.error(`Unable to import config file from "${path}". Error:`, error);
        throw new config_validation_error_1.ConfigValidationError(error);
    }
    try {
        validate_config_1.validateConfig(config);
        return config;
    }
    catch (error) {
        if (error instanceof config_validation_error_1.ConfigValidationError) {
            logger_1.logger.error(error);
        }
        throw error;
    }
};
exports.readConfig = readConfig;
