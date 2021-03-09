import { logger } from "../logger";
import { domainContainsLocale } from "./domain-contains-locale";
export const getDomainByLocale = (domains, locale) => {
  const domain = domains.find(domain => domainContainsLocale(domain, locale));

  if (typeof domain === "undefined") {
    const error = new Error(`Domains in config didn't contain locale "${locale}".`);
    logger.error(error);
    throw error;
  }

  return domain;
};