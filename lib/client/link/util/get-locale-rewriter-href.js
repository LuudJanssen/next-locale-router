"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleRewriterHref = void 0;
const update_href_with_redirect_1 = require("../../util/update-href-with-redirect");
const getLocaleRewriterHref = (originalHref, redirectForLocale) => {
    return redirectForLocale ? update_href_with_redirect_1.updateHrefWithRewrite(originalHref, redirectForLocale) : originalHref;
};
exports.getLocaleRewriterHref = getLocaleRewriterHref;
