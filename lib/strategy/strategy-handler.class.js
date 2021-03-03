"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyHandler = void 0;
const url_1 = require("url");
const logger_1 = require("../logger");
const strategy_type_1 = require("./strategy.type");
const get_request_url_1 = require("./util/request/get-request-url");
class StrategyHandler {
    constructor(app) {
        this.app = app;
        this.handle = app.getRequestHandler();
    }
    handleStrategy(strategy, request, response, next) {
        if (strategy.type === strategy_type_1.StrategyType.RENDER) {
            return this.handleWithConfigOverride(strategy, request, response);
        }
        if (strategy.type === strategy_type_1.StrategyType.PERMANENT_REDIRECT) {
            if (this.isRedirectLoop(request, strategy)) {
                logger_1.logger.error(`Redirect loop avoided for hostname "${request.hostname}". Location was already "${strategy.data.location}".`);
                return next();
            }
            return response.redirect(308, strategy.data.location);
        }
        next();
    }
    handleWithConfigOverride(strategy, request, response) {
        // This strategy temporarily
        const { i18n: originalI18n, ...config } = this.app.nextConfig;
        this.app.nextConfig = config;
        const { pathname, ...url } = url_1.parse(request.url);
        this.handle(request, response, {
            ...url,
            pathname: strategy.data.pathname,
            query: strategy.data.query,
        });
        this.app.nextConfig = {
            ...this.app.nextConfig,
            i18n: originalI18n,
        };
        return;
    }
    isRedirectLoop(request, strategy) {
        const { search, hash, pathname } = get_request_url_1.getRequestUrl(request);
        const originalPath = url_1.format({
            search,
            hash,
            pathname,
        });
        return originalPath === strategy.data.location;
    }
}
exports.StrategyHandler = StrategyHandler;
