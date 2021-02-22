import { logger } from "../logger"
import { Config } from "./config.class"
import { getConfigLocation } from "./util/get-config-location"
import { readConfig } from "./util/read-config"

export const bootstrap = () => {
  const configLocation = getConfigLocation()

  if (typeof configLocation === "undefined") {
    throw logger.error(`Could not find a config file in ${process.cwd}`)
  }

  const config = readConfig(configLocation)

  return new Config(config)
}
