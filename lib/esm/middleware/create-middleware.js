import { LocaleStrategyHandler, LocaleStrategyInvestigator } from "..";
export var createMiddleware = function createMiddleware(config, app) {
  var localeStrategyInvestigator = new LocaleStrategyInvestigator(config);
  var localeStrategyHandler = new LocaleStrategyHandler(app);
  return function (request, response, next) {
    var strategy = localeStrategyInvestigator.determineStrategy(request);
    return localeStrategyHandler.handleStrategy(strategy, request, response, next);
  };
};