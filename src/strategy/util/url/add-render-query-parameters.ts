import { ParsedUrlQuery } from "querystring"
import { Config } from "../../../config/config.class"
import { RenderStrategyQueryParameters } from "../../strategy.type"

export const addRenderQueryParameters = (
  queryParameters: ParsedUrlQuery,
  locale: string,
  config: Config,
): RenderStrategyQueryParameters => {
  const defaultLocale = config.toNextI18nConfig().defaultLocale

  return {
    ...queryParameters,
    __nextLocale: locale,
    __nextDefaultLocale: defaultLocale,
  }
}
