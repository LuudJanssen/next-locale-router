import { useConfig } from "../../config"
import { stripLocalePathSegment } from "../strategy/util/url/strip-locale-path-segment"
import { stripTrailingSlash } from "../strategy/util/url/strip-trailing-slash"
import { getSubpathByLocale } from "../util/get-subpath-by-locale"

export const removeLocaleFromPath = (path: string, locale: string) => {
  const config = useConfig()
  const subpath = getSubpathByLocale(config.domains, locale)
  const pathWithoutLocale = stripLocalePathSegment(path, subpath)
  return stripTrailingSlash(pathWithoutLocale)
}
