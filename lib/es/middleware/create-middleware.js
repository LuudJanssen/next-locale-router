import { LocaleStrategyHandler, LocaleStrategyInvestigator } from "..";
export const createMiddleware = (config, app) => {
  const localeStrategyInvestigator = new LocaleStrategyInvestigator(config);
  const localeStrategyHandler = new LocaleStrategyHandler(app);
  return (request, response, next) => {
    const strategy = localeStrategyInvestigator.determineStrategy(request);
    return localeStrategyHandler.handleStrategy(strategy, request, response, next);
  };
};