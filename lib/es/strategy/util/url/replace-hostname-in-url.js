import { URL } from "url";
export const replaceHostnameInUrl = (url, newHostname) => {
  const newUrl = new URL(url.toString());
  newUrl.hostname = newHostname;
  return newUrl;
};