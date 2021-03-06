import { IConfig } from "../../config.interface"
import { logger } from "../../logger"
import { ConfigValidationError } from "./config-validation.error"
import { validateConfig } from "./validate-config"

export const readConfig = (path: string): IConfig => {
  logger.debug(`Reading config from "${path}"`)

  let config: any
  try {
    config = require(path)
  } catch (error) {
    logger.error(`Unable to import config file from "${path}". Error:`, error)
    throw new ConfigValidationError(error)
  }

  try {
    validateConfig(config)
    return config
  } catch (error) {
    if (error instanceof ConfigValidationError) {
      logger.error(error)
    }

    throw error
  }
}
