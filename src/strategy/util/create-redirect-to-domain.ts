import { format, URL } from "url"
import { IDomain } from "../../domain.interface"
import { ChainablePermanentRedirectStrategy as PermanentRedirect } from "../chainable"
import { replaceHostnameInUrl } from "./url/replace-hostname-in-url"

export const createRedirectToDomain = (url: URL, domain: IDomain): PermanentRedirect => {
  const urlObject = replaceHostnameInUrl(url, domain.hostname)
  const formattedUrl = format(urlObject)
  return new PermanentRedirect({ location: formattedUrl })
}
