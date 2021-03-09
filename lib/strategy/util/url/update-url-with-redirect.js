"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUrlWithRedirect = void 0;
const uri_js_1 = require("uri-js");
const update_pathname_with_redirect_1 = require("./update-pathname-with-redirect");
const updateUrlWithRedirect = (url, redirect) => {
    const uri = uri_js_1.parse(url);
    const path = update_pathname_with_redirect_1.updatePathnameWithRedirect(uri.path, redirect);
    return uri_js_1.serialize({
        ...uri,
        path,
    });
};
exports.updateUrlWithRedirect = updateUrlWithRedirect;
