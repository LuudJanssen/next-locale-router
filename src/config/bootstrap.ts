import { logger } from "../logger"
import { getConfigLocation } from "./util/get-config-location"
import { readConfig } from "./util/read-config"

export const bootstrap = () => {
  const configLocation = getConfigLocation()

  if (typeof configLocation === "undefined") {
    throw logger.error(`Could not find a config file in ${process.cwd}`)
  }

  return readConfig(configLocation)
}
