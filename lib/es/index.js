export { default as getConfig, withLocaleRouter } from "./config";
export { createMiddleware as createLocaleMiddleware } from "./middleware/create-middleware";
export { addLocaleToRedirect } from "./props/add-locale-to-redirect";
export { StrategyHandler as LocaleStrategyHandler, StrategyInvestigator as LocaleStrategyInvestigator } from "./strategy";