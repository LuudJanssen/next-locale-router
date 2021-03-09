import { Logger } from "./logger.class";
import { StrategyLogger } from "./strategy-logger.class";
export const logger = new Logger();
export const strategyLogger = new StrategyLogger(logger);