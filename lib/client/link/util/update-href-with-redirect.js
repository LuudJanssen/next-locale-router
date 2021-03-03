"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHrefWithRedirect = void 0;
const update_pathname_with_redirect_1 = require("../../../strategy/util/url/update-pathname-with-redirect");
const parse_href_as_url_1 = require("./parse-href-as-url");
const updateHrefWithRedirect = (href, redirect) => {
    const { url, urlHadOrigin } = parse_href_as_url_1.parseHrefAsUrl(href);
    const pathname = update_pathname_with_redirect_1.updatePathnameWithRedirect(url.pathname, redirect);
    url.pathname = pathname;
    return urlHadOrigin ? url.toString() : url.pathname + url.search;
};
exports.updateHrefWithRedirect = updateHrefWithRedirect;
