import { URL } from "url"

export const replaceHostnameInUrl = (url: URL, newHostname: string): URL => {
  const newUrl = new URL(url.toString())
  newUrl.hostname = newHostname
  return newUrl
}
