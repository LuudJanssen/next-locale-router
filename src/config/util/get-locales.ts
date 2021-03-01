import { IConfig } from "../../config.interface"
import { getLocalesForDomains } from "../../util/get-locales-for-domains"

export const getLocales = (config: IConfig): string[] => {
  return getLocalesForDomains(config.domains)
}
