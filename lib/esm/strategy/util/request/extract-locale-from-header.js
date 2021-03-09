import Negotiator from "negotiator";
export var extractLocaleFromHeader = function extractLocaleFromHeader(request, locales) {
  var negotiator = new Negotiator(request);
  return negotiator.language(locales);
};