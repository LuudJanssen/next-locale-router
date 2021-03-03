"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlMatchDomains = void 0;
const get_locale_path_segment_1 = require("./get-locale-path-segment");
const urlMatchDomains = (url, domains) => {
    return domains.find((domain) => typeof get_locale_path_segment_1.getLocalePathSegment([domain], url) !== "undefined");
};
exports.urlMatchDomains = urlMatchDomains;
