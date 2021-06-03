import { NextConfig } from "next/dist/next-server/server/config"
import { IConfig } from "../config.interface"
import { Config } from "./config.class"
import { extendNextConfigWithConfigInstance } from "./util/extend-next-config-with-config-instance"

export const extendNextConfig = (nextConfig: Partial<NextConfig>, localeRouterConfig: IConfig) => {
  const config = new Config(localeRouterConfig)
  return extendNextConfigWithConfigInstance(nextConfig, config)
}
