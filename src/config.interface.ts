import { IgnoreOption } from "./config/util/ignore-option.type"
import { IDomain } from "./domain.interface"

export interface IConfig {
  domains: IDomain[]
  defaultLocale: string
  ignore?: IgnoreOption
  trailingSlash?: boolean
}
