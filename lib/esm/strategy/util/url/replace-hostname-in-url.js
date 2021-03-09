import { URL } from "url";
export var replaceHostnameInUrl = function replaceHostnameInUrl(url, newHostname) {
  var newUrl = new URL(url.toString());
  newUrl.hostname = newHostname;
  return newUrl;
};