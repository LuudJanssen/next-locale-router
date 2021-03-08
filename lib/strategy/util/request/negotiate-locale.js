"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negotiateLocale = void 0;
const logger_1 = require("../../../logger");
const get_locales_for_domains_1 = require("../../../util/get-locales-for-domains");
const extract_locale_from_header_1 = require("./extract-locale-from-header");
const extract_next_locale_cookie_1 = require("./extract-next-locale-cookie");
const negotiateLocale = (request, domain) => {
    const locales = get_locales_for_domains_1.getLocalesForDomains([domain]);
    if (locales.length === 1) {
        logger_1.logger.debug(`Language negotiation was skipped because this domain only contains "${locales[0]}" as a locale, which was returned.`);
        return locales[0];
    }
    const forcedLocale = extract_next_locale_cookie_1.extractNextLocaleCookie(request, locales);
    if (typeof forcedLocale === "string") {
        logger_1.logger.debug(`Language negotiation succeeded through Next.js cookie and returned "${forcedLocale}".`);
        return forcedLocale;
    }
    const negotiatedLocale = extract_locale_from_header_1.extractLocaleFromHeader(request, locales);
    if (typeof negotiatedLocale === "string") {
        logger_1.logger.debug(`Language negotiation succeeded through the request headers and returned "${negotiatedLocale}'.`);
        return negotiatedLocale;
    }
    logger_1.logger.debug(`Language negotiation didn't yield a result and the defaultLocale "${domain.defaultLocale}" was returned.`);
    return domain.defaultLocale;
};
exports.negotiateLocale = negotiateLocale;
