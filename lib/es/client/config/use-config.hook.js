import getConfig from "next/config";
import { CONFIG_RUNTIME_KEY } from "../../constants/config-runtime-key.constant";
export const useConfig = () => {
  const {
    publicRuntimeConfig
  } = getConfig();
  return publicRuntimeConfig[CONFIG_RUNTIME_KEY];
};