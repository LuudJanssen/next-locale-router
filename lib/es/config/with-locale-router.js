import { CONFIG_RUNTIME_KEY } from "../constants/config-runtime-key.constant";
import { bootstrap } from "./bootstrap";
export const withLocaleRouter = () => async (nextConfig = {}) => {
  const config = await bootstrap();
  return { ...nextConfig,
    i18n: config.toNextI18nConfig(),
    publicRuntimeConfig: { ...(nextConfig.publicRuntimeConfig ?? {}),
      [CONFIG_RUNTIME_KEY]: config.toObject()
    }
  };
};