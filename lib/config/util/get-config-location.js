"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigLocation = void 0;
const find_up_1 = __importDefault(require("find-up"));
const config_filename_constant_1 = require("../../constants/config-filename.constant");
const logger_1 = require("../../logger");
const getConfigLocation = () => {
    const location = find_up_1.default.sync(config_filename_constant_1.CONFIG_FILENAME);
    if (typeof location === "undefined") {
        throw logger_1.logger.error(`Could not find a "${config_filename_constant_1.CONFIG_FILENAME}" config file in ${process.cwd} or any of its parent directories.`);
    }
    return location;
};
exports.getConfigLocation = getConfigLocation;
