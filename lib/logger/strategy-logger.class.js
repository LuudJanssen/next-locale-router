"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyLogger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const url_1 = require("url");
const strategy_type_1 = require("../strategy/strategy.type");
const is_debug_mode_1 = require("../util/is-debug-mode");
const DATA_HEADER = `${chalk_1.default.grey("╠══════")} ${chalk_1.default.green("DATA")} ${chalk_1.default.grey("══════")}`;
const DATA_PREFIX = chalk_1.default.grey("║ ");
const DATA_FOOTER = chalk_1.default.grey("╚══════════════════");
class StrategyLogger {
    constructor(logger) {
        this.logger = logger;
    }
    log(strategy, url) {
        if (!is_debug_mode_1.isDebugMode()) {
            return;
        }
        const formattedUrl = url_1.format(url);
        if (strategy.type === strategy_type_1.StrategyType.PASSTHROUGH) {
            this.logger.debug(`${strategy.type}\t\t`, formattedUrl);
            return;
        }
        const tabs = strategy.type === strategy_type_1.StrategyType.RENDER ? "\t\t\t" : "\t";
        const logLine = this.logger.log(`${strategy.type}${tabs}`, formattedUrl);
        logLine.add(`${DATA_HEADER}`);
        const dataString = JSON.stringify(strategy.data, null, 2);
        const dataLines = dataString.split("\n");
        for (const line of dataLines) {
            logLine.add(`${DATA_PREFIX}${line}`);
        }
        logLine.add(DATA_FOOTER);
        return;
    }
}
exports.StrategyLogger = StrategyLogger;
