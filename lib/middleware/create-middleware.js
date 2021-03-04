"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddleware = void 0;
const __1 = require("..");
const createMiddleware = (config, app) => {
    const localeStrategyInvestigator = new __1.LocaleStrategyInvestigator(config);
    const localeStrategyHandler = new __1.LocaleStrategyHandler(app);
    return (request, response, next) => {
        const strategy = localeStrategyInvestigator.determineStrategy(request);
        return localeStrategyHandler.handleStrategy(strategy, request, response, next);
    };
};
exports.createMiddleware = createMiddleware;
