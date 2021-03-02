import { NextConfig } from "next/dist/next-server/server/config"
import config from "./index"

export const withLocaleRouter = () => (
  nextConfig: Partial<NextConfig> = {},
): Partial<NextConfig> => {
  return {
    ...nextConfig,
    i18n: {
      ...config.toNextI18nConfig(),
    },
  }
}
