"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleRewriterHref = void 0;
const no_url_base_or_browser_error_1 = require("./no-url-base-or-browser.error");
const update_href_with_redirect_1 = require("./update-href-with-redirect");
const getLocaleRewriterHref = (originalHref, redirectForLocale) => {
    try {
        return redirectForLocale
            ? update_href_with_redirect_1.updateHrefWithRedirect(originalHref, redirectForLocale)
            : originalHref;
    }
    catch (error) {
        if (error instanceof no_url_base_or_browser_error_1.NoUrlBaseOrBrowserError) {
            throw new Error("The `href` property on  next-locale-router's `<LinkLocaleRewriter>` component is missing an origin and rendering was happening outside of a browser environment. Can't construct the full URL.");
        }
        throw error;
    }
};
exports.getLocaleRewriterHref = getLocaleRewriterHref;
