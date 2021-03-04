import { IConfig } from "../../config.interface"
import { getLocalesForDomains } from "../../util/get-locales-for-domains"

export const configToNextI18NextConfig = (config: IConfig) => {
  return {
    locales: getLocalesForDomains(config.domains),
    defaultLocale: config.defaultLocale,
  }
}
