import { format } from "url";
import { ChainablePermanentRedirectStrategy as PermanentRedirect } from "../chainable";
import { replaceHostnameInUrl } from "./url/replace-hostname-in-url";
export const createRedirectToDomain = (url, domain) => {
  const urlObject = replaceHostnameInUrl(url, domain.hostname);
  const formattedUrl = format(urlObject);
  return new PermanentRedirect({
    location: formattedUrl
  });
};