import { getLocalePathSegment } from "./get-locale-path-segment";
export var urlMatchDomains = function urlMatchDomains(url, domains) {
  return domains.find(function (domain) {
    return typeof getLocalePathSegment([domain], url) !== "undefined";
  });
};