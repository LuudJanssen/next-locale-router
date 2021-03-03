"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceHostnameInUrl = void 0;
const url_1 = require("url");
const replaceHostnameInUrl = (url, newHostname) => {
    const newUrl = new url_1.URL(url.toString());
    newUrl.hostname = newHostname;
    return newUrl;
};
exports.replaceHostnameInUrl = replaceHostnameInUrl;
