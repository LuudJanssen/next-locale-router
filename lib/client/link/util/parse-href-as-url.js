"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHrefAsUrl = void 0;
const no_url_base_or_browser_error_1 = require("./no-url-base-or-browser.error");
const parseHrefAsUrl = (href) => {
    let url;
    let urlHadOrigin;
    try {
        url = new URL(href);
        urlHadOrigin = true;
    }
    catch (error) {
        if (typeof window === "undefined") {
            throw new no_url_base_or_browser_error_1.NoUrlBaseOrBrowserError();
        }
        url = new URL(href, window.location.origin);
        urlHadOrigin = false;
    }
    return { url, urlHadOrigin };
};
exports.parseHrefAsUrl = parseHrefAsUrl;
