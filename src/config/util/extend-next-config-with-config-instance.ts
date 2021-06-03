import { NextConfig } from "next/dist/next-server/server/config"
import { CONFIG_RUNTIME_KEY } from "../../constants/config-runtime-key.constant"
import { Config } from "../config.class"

export const extendNextConfigWithConfigInstance = (
  nextConfig: Partial<NextConfig>,
  localeRouterConfig: Config,
): Partial<NextConfig> => ({
  ...nextConfig,
  i18n: localeRouterConfig.toNextI18nConfig(),
  publicRuntimeConfig: {
    ...(nextConfig.publicRuntimeConfig ?? {}),
    [CONFIG_RUNTIME_KEY]: localeRouterConfig.toObject(),
  },
  trailingSlash: localeRouterConfig.trailingSlash,
})
