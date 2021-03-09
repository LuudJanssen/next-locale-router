import Negotiator from "negotiator";
export const extractLocaleFromHeader = (request, locales) => {
  const negotiator = new Negotiator(request);
  return negotiator.language(locales);
};