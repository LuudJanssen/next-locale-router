import { IDomain } from "../server/domain.interface"
import { IgnoreOption } from "./util/ignore-option.type"

export interface IConfig {
  domains: IDomain[]
  defaultLocale: string
  ignore?: IgnoreOption
  trailingSlash?: boolean
}
