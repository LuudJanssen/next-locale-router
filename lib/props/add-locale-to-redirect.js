"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLocaleToRedirect = void 0;
const use_config_hook_1 = require("../client/config/use-config.hook");
const update_url_with_redirect_1 = require("../strategy/util/url/update-url-with-redirect");
const get_locale_redirect_by_locale_1 = require("../util/get-locale-redirect-by-locale");
const addLocaleToRedirect = (redirect, locale) => {
    const config = use_config_hook_1.useConfig();
    const { destination, ...redirectOptions } = redirect;
    const localeRedirect = get_locale_redirect_by_locale_1.getLocaleRedirectByLocale(config.domains, locale);
    if (typeof localeRedirect === "undefined") {
        return redirect;
    }
    const newDestination = update_url_with_redirect_1.updateUrlWithRedirect(destination, localeRedirect);
    return {
        destination: newDestination,
        ...redirectOptions,
    };
};
exports.addLocaleToRedirect = addLocaleToRedirect;
