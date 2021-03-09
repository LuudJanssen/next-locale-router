import path from "path";
import { logger } from "../../logger";
import { ConfigValidationError } from "./config-validation.error";
import { validateConfig } from "./validate-config";
const CONFIG_LOCATION = "./i18n.config.js";
export const readConfig = async location => {
  logger.debug(`Reading config from "${location}"`);
  let config;

  try {
    config = await import(path.resolve(CONFIG_LOCATION));
  } catch (error) {
    logger.error(`Unable to import config file from "${location}". Error:`, error);
    throw new ConfigValidationError(error);
  }

  try {
    validateConfig(config);
    return config;
  } catch (error) {
    if (error instanceof ConfigValidationError) {
      logger.error(error);
    }

    throw error;
  }
};