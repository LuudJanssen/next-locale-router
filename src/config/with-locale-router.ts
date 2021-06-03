import { NextConfig } from "next/dist/next-server/server/config"
import config from "./index"
import { extendNextConfigWithConfigInstance } from "./util/extend-next-config-with-config-instance"

export const withLocaleRouter =
  () =>
  (nextConfig: Partial<NextConfig> = {}): Partial<NextConfig> =>
    extendNextConfigWithConfigInstance(nextConfig, config)
