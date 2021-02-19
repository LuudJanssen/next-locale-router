import { getConfigLocation } from "./util/get-config-location"
import { readConfig } from "./util/read-config"

export const bootstrap = () => {
  const configLocation = getConfigLocation()
  return readConfig(configLocation)
}
