import { parseUrl } from "./parse-url"

export const getPathSegments = (url: string) =>
  parseUrl(url)
    .pathname.split("/")
    .filter((segment) => segment !== "")
