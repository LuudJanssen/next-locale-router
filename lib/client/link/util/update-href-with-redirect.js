"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHrefWithRewrite = void 0;
const uri_js_1 = require("uri-js");
const update_pathname_with_redirect_1 = require("../../../strategy/util/url/update-pathname-with-redirect");
const updateHrefWithRewrite = (href, rewrite) => {
    const uri = uri_js_1.parse(href);
    const path = update_pathname_with_redirect_1.updatePathnameWithRedirect(uri.path, rewrite);
    return uri_js_1.serialize({
        ...uri,
        path,
    });
};
exports.updateHrefWithRewrite = updateHrefWithRewrite;
