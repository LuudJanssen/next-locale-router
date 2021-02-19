import appRoot from "app-root-path"
import { CONFIG_LOCATION } from "../../constants/config-location.constant"

export const getConfigLocation = (): string => {
  return appRoot.resolve(CONFIG_LOCATION)
}
