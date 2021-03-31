import getConfig from "next/config"
import { IConfig } from "../config.interface"
import { CONFIG_RUNTIME_KEY } from "../constants/config-runtime-key.constant"

export const getRuntimeConfig = (): IConfig => {
  const { publicRuntimeConfig } = getConfig()
  return publicRuntimeConfig[CONFIG_RUNTIME_KEY]
}
