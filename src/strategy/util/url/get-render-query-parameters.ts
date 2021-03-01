import { IDomain } from "../../../domain.interface"
import { RenderStrategyQueryParameters } from "../../strategy.type"

export const getRenderQueryParameters = (
  locale: string,
  domain: IDomain,
): RenderStrategyQueryParameters => {
  const defaultLocale = domain.defaultLocale

  return {
    __nextLocale: locale,
    __nextDefaultLocale: defaultLocale,
  }
}
