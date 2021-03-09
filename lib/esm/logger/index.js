import { Logger } from "./logger.class";
import { StrategyLogger } from "./strategy-logger.class";
export var logger = new Logger();
export var strategyLogger = new StrategyLogger(logger);