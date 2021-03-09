"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAsParameterWithLocale = void 0;
const url_1 = require("url");
const update_url_with_redirect_1 = require("../../../strategy/util/url/update-url-with-redirect");
const updateAsParameterWithLocale = (as, redirect) => {
    if (typeof as === "undefined") {
        return as;
    }
    const normalizedAs = typeof as === "string" ? as : url_1.format(as);
    return update_url_with_redirect_1.updateUrlWithRedirect(normalizedAs, redirect);
};
exports.updateAsParameterWithLocale = updateAsParameterWithLocale;
