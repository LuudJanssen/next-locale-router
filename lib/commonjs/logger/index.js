"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strategyLogger = exports.logger = void 0;

var _logger = require("./logger.class");

var _strategyLogger = require("./strategy-logger.class");

var logger = new _logger.Logger();
exports.logger = logger;
var strategyLogger = new _strategyLogger.StrategyLogger(logger);
exports.strategyLogger = strategyLogger;