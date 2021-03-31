import chalk from "chalk"
import { format, URL } from "url"
import { Strategy, StrategyType } from "../strategy/strategy.type"
import { isDebugMode } from "../util/is-debug-mode"
import { Logger } from "./logger.class"

const DATA_HEADER = `${chalk.grey("╠══════")} ${chalk.green("DATA")} ${chalk.grey("══════")}`
const DATA_PREFIX = chalk.grey("║ ")
const DATA_FOOTER = chalk.grey("╚══════════════════")

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
    logLine.add(`${DATA_HEADER}`)

    const dataString = JSON.stringify(strategy.data, null, 2)
    const dataLines = dataString.split("\n")

    for (const line of dataLines) {
      logLine.add(`${DATA_PREFIX}${line}`)
    }

    logLine.add(DATA_FOOTER)

    return
  }
}
