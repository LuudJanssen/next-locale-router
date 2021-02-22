import { IncomingMessage } from "http"
import { Config } from "../config/config.class"
import { logger } from "../logger"
import { isDebugMode } from "../util/is-debug-mode"
import { StrategyType } from "./strategy-type.enum"
import { Strategy } from "./strategy.type"
import { InvalidRequestError } from "./util/request/invalid-request.error"
import { isInternalNextRequest } from "./util/request/is-internal-next-request"
import { isValidRequest } from "./util/request/request.type"

export class StrategyInvestigator {
  constructor(protected config: Config) {}

  determineStrategy(request: IncomingMessage): Strategy {
    if (!isValidRequest(request)) {
      throw new InvalidRequestError()
    }

    if (isInternalNextRequest(request)) {
      const strategy: Strategy = {
        type: StrategyType.PASSTHROUGH,
      }

      this.logStrategy(strategy, request.url)
      return strategy
    }

    const strategy: Strategy = {
      type: StrategyType.PERMANENT_REDIRECT,
      data: {
        url: "test",
      },
    }

    this.logStrategy(strategy, request.url)
    return strategy
  }

  private logStrategy(strategy: Strategy, url: string) {
    if (!isDebugMode()) {
      return
    }

    if (strategy.type === StrategyType.PASSTHROUGH) {
      logger.debug(`${strategy.type}\t\t`, url)
      return
    }

    const logLine = logger.log(`${strategy.type}\t`, url)
    logLine.add(`╚═══▶ data\t\t`, strategy.data)
    return
  }
}
