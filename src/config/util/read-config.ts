import { IConfig } from "../../config.interface"
import { logger } from "../../logger"
import { isDebugMode } from "../../util/is-debug-mode"
import { validateConfig } from "./validate-config"

export const readConfig = (path: string): IConfig => {
  if (isDebugMode()) {
    logger.debug(`Reading config from "${path}"`)
  }

  let config: any
  try {
    config = require(path)
  } catch (error) {
    throw console.error(`Unable to import config file from "${path}". Error:`, error)
  }

  if (!validateConfig(config)) throw ""

  return config
}
