import { NextConfig } from "next/dist/next-server/server/config"
import config from "./"
import { CONFIG_RUNTIME_KEY } from "./constants/config-runtime-key.constant"

export const withLocaleRouter = () => (
  nextConfig: Partial<NextConfig> = {},
): Partial<NextConfig> => ({
  ...nextConfig,
  i18n: config.toNextI18nConfig(),
  publicRuntimeConfig: {
    ...(nextConfig.publicRuntimeConfig ?? {}),
    [CONFIG_RUNTIME_KEY]: config.toObject(),
  },
  trailingSlash: config.trailingSlash,
})
