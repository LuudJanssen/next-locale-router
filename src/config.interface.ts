import { IDomain } from "./domain.interface"

export interface IConfig {
  domains: IDomain[]
  defaultLocale: string
}
