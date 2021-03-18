import { NextConfig } from "next/dist/next-server/server/config"
import { CONFIG_RUNTIME_KEY } from "../constants/config-runtime-key.constant"
import config from "./index"

export const withLocaleRouter = (trailingSlash = false) => (
  nextConfig: Partial<NextConfig> = {},
): Partial<NextConfig> => {
  console.log("trailingSlash: ", trailingSlash)
  return {
    ...nextConfig,
    i18n: config.toNextI18nConfig(),
    publicRuntimeConfig: {
      ...(nextConfig.publicRuntimeConfig ?? {}),
      [CONFIG_RUNTIME_KEY]: config.toObject(),
    },
    trailingSlash,
  }
}
