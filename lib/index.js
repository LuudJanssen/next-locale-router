"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleStrategyInvestigator = exports.LocaleStrategyHandler = exports.createLocaleMiddleware = exports.withLocaleRouter = exports.config = void 0;
var config_1 = require("./config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return __importDefault(config_1).default; } });
Object.defineProperty(exports, "withLocaleRouter", { enumerable: true, get: function () { return config_1.withLocaleRouter; } });
var create_middleware_1 = require("./middleware/create-middleware");
Object.defineProperty(exports, "createLocaleMiddleware", { enumerable: true, get: function () { return create_middleware_1.createMiddleware; } });
var strategy_1 = require("./strategy");
Object.defineProperty(exports, "LocaleStrategyHandler", { enumerable: true, get: function () { return strategy_1.StrategyHandler; } });
Object.defineProperty(exports, "LocaleStrategyInvestigator", { enumerable: true, get: function () { return strategy_1.StrategyInvestigator; } });
