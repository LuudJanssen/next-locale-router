"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategyLogger = exports.logger = void 0;
const logger_class_1 = require("./logger.class");
const strategy_logger_class_1 = require("./strategy-logger.class");
exports.logger = new logger_class_1.Logger();
exports.strategyLogger = new strategy_logger_class_1.StrategyLogger(exports.logger);
