import { addTrailingSlash } from "../../strategy/util/url/add-trailing-slash"
import { stripTrailingSlash } from "../../strategy/util/url/strip-trailing-slash"
import { useConfig } from "../config/use-config.hook"

export const honorTrailingSlash = (pathname: string) => {
  const config = useConfig()

  if (!config.trailingSlash) {
    return stripTrailingSlash(pathname)
  }

  return addTrailingSlash(pathname)
}
