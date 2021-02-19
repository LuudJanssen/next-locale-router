import { IConfig } from "../../config.interface"
import { getDomainsLocales } from "./get-domains-locales"

export const getLocales = (config: IConfig): string[] => {
  return getDomainsLocales(config.domains)
}
