import { Config } from "../../../config/config.class"
import { RenderStrategyQueryParameters } from "../../strategy.type"

export const getRenderQueryParameters = (
  locale: string,
  config: Config,
): RenderStrategyQueryParameters => {
  const defaultLocale = config.toNextI18nConfig().defaultLocale

  return {
    __nextLocale: locale,
    __nextDefaultLocale: defaultLocale,
  }
}
