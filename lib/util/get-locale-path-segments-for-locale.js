"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalePathSegmentsForDomain = void 0;
const clean_path_segment_1 = require("../strategy/util/url/clean-path-segment");
const get_locale_subpaths_for_domains_1 = require("./get-locale-subpaths-for-domains");
const get_locales_for_domains_1 = require("./get-locales-for-domains");
const getLocalePathSegmentsForDomain = (domain) => {
    const locales = get_locales_for_domains_1.getLocalesForDomains([domain]);
    const localePaths = get_locale_subpaths_for_domains_1.getLocaleSubpathsForDomains([domain]).map((path) => clean_path_segment_1.cleanPathSegment(path));
    return [...locales, ...localePaths];
};
exports.getLocalePathSegmentsForDomain = getLocalePathSegmentsForDomain;
