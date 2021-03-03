"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRedirect = void 0;
const url_1 = require("url");
const chainable_1 = require("../chainable");
const format_url_1 = require("./url/format-url");
const strip_trailing_slash_1 = require("./url/strip-trailing-slash");
const update_pathname_with_redirect_1 = require("./url/update-pathname-with-redirect");
const createRedirect = (url, redirect) => {
    const { pathname, search, hash } = url_1.parse(format_url_1.formatUrl(url)); // We need the legacy Node.js API url format
    const newPathname = update_pathname_with_redirect_1.updatePathnameWithRedirect(pathname, redirect);
    const formattedPathname = url_1.format({
        search,
        hash,
        pathname: strip_trailing_slash_1.stripTrailingSlash(newPathname),
    });
    return new chainable_1.ChainablePermanentRedirectStrategy({ location: formattedPathname });
};
exports.createRedirect = createRedirect;
