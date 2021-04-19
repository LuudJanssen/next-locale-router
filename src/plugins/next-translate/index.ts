import { IConfig } from "../../config.interface"
import { getLocalesForDomains } from "../../util/get-locales-for-domains"

export const configToNextTranslateConfig = (config: IConfig) => {
  return {
    locales: getLocalesForDomains(config.domains),
    defaultLocale: config.defaultLocale,
  }
}
