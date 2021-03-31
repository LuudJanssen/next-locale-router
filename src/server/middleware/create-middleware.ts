import { RequestHandler } from "express"
import Server from "next/dist/next-server/server/next-server"
import { LocaleStrategyHandler, LocaleStrategyInvestigator } from ".."
import { Config } from "../../config/config.class"

export const createMiddleware = (config: Config, app: Server): RequestHandler => {
  const localeStrategyInvestigator = new LocaleStrategyInvestigator(config)
  const localeStrategyHandler = new LocaleStrategyHandler(app)

  return (request, response, next) => {
    const strategy = localeStrategyInvestigator.determineStrategy(request)
    return localeStrategyHandler.handleStrategy(strategy, request, response, next)
  }
}
