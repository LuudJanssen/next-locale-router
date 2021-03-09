import { format } from "url";
import { ChainablePermanentRedirectStrategy as PermanentRedirect } from "../chainable";
import { replaceHostnameInUrl } from "./url/replace-hostname-in-url";
export var createRedirectToDomain = function createRedirectToDomain(url, domain) {
  var urlObject = replaceHostnameInUrl(url, domain.hostname);
  var formattedUrl = format(urlObject);
  return new PermanentRedirect({
    location: formattedUrl
  });
};