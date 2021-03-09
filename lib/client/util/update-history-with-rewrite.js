"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHistoryWithRewrite = void 0;
const update_url_with_redirect_1 = require("../../strategy/util/url/update-url-with-redirect");
const updateHistoryWithRewrite = (url, rewrite) => {
    const newUrl = update_url_with_redirect_1.updateUrlWithRedirect(url, rewrite);
    if (url === newUrl) {
        return false;
    }
    window.history.pushState(window.history.state, "", newUrl);
    return true;
};
exports.updateHistoryWithRewrite = updateHistoryWithRewrite;
