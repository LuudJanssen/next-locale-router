import { logger } from "../logger";
import { domainContainsLocale } from "./domain-contains-locale";
export var getDomainByLocale = function getDomainByLocale(domains, locale) {
  var domain = domains.find(function (domain) {
    return domainContainsLocale(domain, locale);
  });

  if (typeof domain === "undefined") {
    var error = new Error("Domains in config didn't contain locale \"".concat(locale, "\"."));
    logger.error(error);
    throw error;
  }

  return domain;
};