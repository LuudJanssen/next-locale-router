import { RequestHandler } from "express"
import { LocaleStrategyHandler, LocaleStrategyInvestigator } from ".."
import { Config } from "../config/config.class"
import { NextInstance } from "../util/next-server.type"

export const createMiddleware = (config: Config, app: NextInstance): RequestHandler => {
  const localeStrategyInvestigator = new LocaleStrategyInvestigator(config)
  const localeStrategyHandler = new LocaleStrategyHandler(app)

  return async (request, response, next) => {
    const strategy = localeStrategyInvestigator.determineStrategy(request)
    return await localeStrategyHandler.handleStrategy(strategy, request, response, next)
  }
}
