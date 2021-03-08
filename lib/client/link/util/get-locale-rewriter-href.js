"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleRewriterHref = void 0;
const update_url_with_redirect_1 = require("../../../strategy/util/url/update-url-with-redirect");
const getLocaleRewriterHref = (originalHref, redirectForLocale) => {
    return redirectForLocale ? update_url_with_redirect_1.updateUrlWithRedirect(originalHref, redirectForLocale) : originalHref;
};
exports.getLocaleRewriterHref = getLocaleRewriterHref;
