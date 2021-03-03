"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    constructor(prefix = "[next-i18n-router] \t") {
        this.prefix = prefix;
    }
    log(message, ...optionalParams) {
        console.log(chalk_1.default.cyan(this.prefix), message, ...optionalParams);
        return this.createLogline("log");
    }
    debug(message, ...optionalParams) {
        const params = [message, ...optionalParams].map((param) => {
            if (typeof param === "string") {
                return chalk_1.default.grey(param);
            }
            return param;
        });
        console.debug(chalk_1.default.grey(`${this.prefix}`), ...params);
        return this.createLogline("debug");
    }
    warn(message, ...optionalParams) {
        console.warn(chalk_1.default.yellow(this.prefix), message, ...optionalParams);
        return this.createLogline("warn");
    }
    error(message, ...optionalParams) {
        const [firstSegment, ...otherSegments] = message instanceof Error ? [message.name, message.message] : [message, ...optionalParams];
        console.error(chalk_1.default.red(this.prefix), firstSegment, ...otherSegments);
        return this.createLogline("error");
    }
    createLogline(level) {
        const [firstPrefixSegment, ...otherPrefixSegments] = this.prefix.split("\t");
        const newFirstPrefixSegment = "".padStart(firstPrefixSegment.length);
        const newPrefix = [newFirstPrefixSegment, ...otherPrefixSegments].join("\t");
        const logger = new Logger(newPrefix);
        const add = logger[level].bind(logger);
        return {
            level,
            add,
        };
    }
}
exports.Logger = Logger;
