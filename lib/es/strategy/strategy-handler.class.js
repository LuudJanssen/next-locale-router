import { format, parse } from "url";
import { logger } from "../logger";
import { StrategyType } from "./strategy.type";
import { getRequestUrl } from "./util/request/get-request-url";
export class StrategyHandler {
  constructor(app) {
    this.app = app;
    this.handle = app.getRequestHandler();
  }

  handleStrategy(strategy, request, response, next) {
    if (strategy.type === StrategyType.RENDER) {
      return this.handleWithConfigOverride(strategy, request, response);
    }

    if (strategy.type === StrategyType.PERMANENT_REDIRECT) {
      if (this.isRedirectLoop(request, strategy)) {
        logger.error(`Redirect loop avoided for hostname "${request.hostname}". Location was already "${strategy.data.location}".`);
        return next();
      }

      return response.redirect(308, strategy.data.location);
    }

    next();
  }

  handleWithConfigOverride(strategy, request, response) {
    // This strategy temporarily
    const {
      i18n: originalI18n,
      ...config
    } = this.app.nextConfig;
    this.app.nextConfig = config;
    const {
      pathname,
      ...url
    } = parse(request.url);
    this.handle(request, response, { ...url,
      pathname: strategy.data.pathname,
      query: strategy.data.query
    });
    this.app.nextConfig = { ...this.app.nextConfig,
      i18n: originalI18n
    };
    return;
  }

  isRedirectLoop(request, strategy) {
    const {
      search,
      hash,
      pathname
    } = getRequestUrl(request);
    const originalPath = format({
      search,
      hash,
      pathname
    });
    return originalPath === strategy.data.location;
  }

}