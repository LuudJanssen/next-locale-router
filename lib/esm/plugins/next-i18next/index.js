import { getLocalesForDomains } from "../../util/get-locales-for-domains";
export var configToNextI18NextConfig = function configToNextI18NextConfig(config) {
  return {
    locales: getLocalesForDomains(config.domains),
    defaultLocale: config.defaultLocale
  };
};