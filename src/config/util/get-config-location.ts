import findUp from "find-up"
import { CONFIG_FILENAME } from "../../constants/config-filename.constant"
import { logger } from "../../logger"

export const getConfigLocation = (): string => {
  const location = findUp.sync(CONFIG_FILENAME)
  console.log(location)

  if (typeof location === "undefined") {
    throw logger.error(
      `Could not find a "${CONFIG_FILENAME}" config file in ${process.cwd} or any of its parent directories.`,
    )
  }

  return location
}
