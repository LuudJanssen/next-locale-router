import { URL } from "url"

export const getPathSegments = (url: URL) =>
  url.pathname.split("/").filter((segment) => segment !== "")
