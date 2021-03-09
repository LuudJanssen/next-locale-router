import { getLocalesForDomains } from "../../util/get-locales-for-domains";
export const configToNextI18NextConfig = config => {
  return {
    locales: getLocalesForDomains(config.domains),
    defaultLocale: config.defaultLocale
  };
};