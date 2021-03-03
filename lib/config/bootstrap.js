"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const logger_1 = require("../logger");
const config_class_1 = require("./config.class");
const get_config_location_1 = require("./util/get-config-location");
const read_config_1 = require("./util/read-config");
const bootstrap = () => {
    const configLocation = get_config_location_1.getConfigLocation();
    if (typeof configLocation === "undefined") {
        throw logger_1.logger.error(`Could not find a config file in ${process.cwd}`);
    }
    const config = read_config_1.readConfig(configLocation);
    return new config_class_1.Config(config);
};
exports.bootstrap = bootstrap;
