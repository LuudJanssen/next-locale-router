import { RequestHandler } from "express"
import { LocaleStrategyHandler, LocaleStrategyInvestigator } from ".."
import { Config } from "../config/config.class"
import { NextServer } from "../util/next-server.type"

export const createMiddleware = (config: Config, app: NextServer): RequestHandler => {
  const localeStrategyInvestigator = new LocaleStrategyInvestigator(config)
  const localeStrategyHandler = new LocaleStrategyHandler(app)

  return async (request, response, next) => {
    const strategy = localeStrategyInvestigator.determineStrategy(request)
    return await localeStrategyHandler.handleStrategy(strategy, request, response, next)
  }
}
