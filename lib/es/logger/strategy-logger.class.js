import chalk from "chalk";
import { format } from "url";
import { StrategyType } from "../strategy/strategy.type";
import { isDebugMode } from "../util/is-debug-mode";
const DATA_HEADER = `${chalk.grey("╠══════")} ${chalk.green("DATA")} ${chalk.grey("══════")}`;
const DATA_PREFIX = chalk.grey("║ ");
const DATA_FOOTER = chalk.grey("╚══════════════════");
export class StrategyLogger {
  constructor(logger) {
    this.logger = logger;
  }

  log(strategy, url) {
    if (!isDebugMode()) {
      return;
    }

    const formattedUrl = format(url);

    if (strategy.type === StrategyType.PASSTHROUGH) {
      this.logger.debug(`${strategy.type}\t\t`, formattedUrl);
      return;
    }

    const tabs = strategy.type === StrategyType.RENDER ? "\t\t\t" : "\t";
    const logLine = this.logger.log(`${strategy.type}${tabs}`, formattedUrl);
    logLine.add(`${DATA_HEADER}`);
    const dataString = JSON.stringify(strategy.data, null, 2);
    const dataLines = dataString.split("\n");

    for (const line of dataLines) {
      logLine.add(`${DATA_PREFIX}${line}`);
    }

    logLine.add(DATA_FOOTER);
    return;
  }

}