import { format, URL } from "url"
import { StrategyType } from "../strategy/strategy-type.enum"
import { Strategy } from "../strategy/strategy.type"
import { isDebugMode } from "../util/is-debug-mode"
import { Logger } from "./logger.class"

export class StrategyLogger {
  constructor(private logger: Logger) {}

  public log(strategy: Strategy, url: URL) {
    if (!isDebugMode()) {
      return
    }

    const formattedUrl = format(url)

    if (strategy.type === StrategyType.PASSTHROUGH) {
      this.logger.debug(`${strategy.type}\t\t`, formattedUrl)
      return
    }

    const tabs = strategy.type === StrategyType.RENDER ? "\t\t\t" : "\t"

    const logLine = this.logger.log(`${strategy.type}${tabs}`, formattedUrl)
    logLine.add(`╚═══▶ data\t\t`, strategy.data)
    return
  }
}
