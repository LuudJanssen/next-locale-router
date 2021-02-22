export { default as config } from "./config"
export type { IConfig as NextLocaleConfig } from "./config.interface"
export type { IDomain as NextLocaleDomain } from "./domain.interface"
export { createMiddleware as createLocaleMiddleware } from "./middleware/create-middleware"
export {
  StrategyHandler as LocaleStrategyHandler,
  StrategyInvestigator as LocaleStrategyInvestigator,
} from "./strategy"
export type { ISubpath as NextLocaleSubpath } from "./subpath.interface"
