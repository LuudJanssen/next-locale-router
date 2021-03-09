import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import { cleanPathSegment } from "../strategy/util/url/clean-path-segment";
import { getLocaleSubpathsForDomains } from "./get-locale-subpaths-for-domains";
import { getLocalesForDomains } from "./get-locales-for-domains";
export var getLocalePathSegmentsForDomain = function getLocalePathSegmentsForDomain(domain) {
  var locales = getLocalesForDomains([domain]);
  var localePaths = getLocaleSubpathsForDomains([domain]).map(function (path) {
    return cleanPathSegment(path);
  });
  return [].concat(_toConsumableArray(locales), _toConsumableArray(localePaths));
};