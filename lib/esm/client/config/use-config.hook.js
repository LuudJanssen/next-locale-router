import getConfig from "next/config";
import { CONFIG_RUNTIME_KEY } from "../../constants/config-runtime-key.constant";
export var useConfig = function useConfig() {
  var _getConfig = getConfig(),
      publicRuntimeConfig = _getConfig.publicRuntimeConfig;

  return publicRuntimeConfig[CONFIG_RUNTIME_KEY];
};