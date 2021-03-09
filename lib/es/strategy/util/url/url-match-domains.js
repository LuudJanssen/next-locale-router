import { getLocalePathSegment } from "./get-locale-path-segment";
export const urlMatchDomains = (url, domains) => {
  return domains.find(domain => typeof getLocalePathSegment([domain], url) !== "undefined");
};