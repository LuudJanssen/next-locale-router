"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRedirectToDomain = void 0;
const url_1 = require("url");
const chainable_1 = require("../chainable");
const replace_hostname_in_url_1 = require("./url/replace-hostname-in-url");
const createRedirectToDomain = (url, domain) => {
    const urlObject = replace_hostname_in_url_1.replaceHostnameInUrl(url, domain.hostname);
    const formattedUrl = url_1.format(urlObject);
    return new chainable_1.ChainablePermanentRedirectStrategy({ location: formattedUrl });
};
exports.createRedirectToDomain = createRedirectToDomain;
