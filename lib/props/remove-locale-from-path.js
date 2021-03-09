"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLocaleFromPath = void 0;
const use_config_hook_1 = require("../client/config/use-config.hook");
const strip_locale_path_segment_1 = require("../strategy/util/url/strip-locale-path-segment");
const strip_trailing_slash_1 = require("../strategy/util/url/strip-trailing-slash");
const get_subpath_by_locale_1 = require("../util/get-subpath-by-locale");
const removeLocaleFromPath = (path, locale) => {
    const config = use_config_hook_1.useConfig();
    const subpath = get_subpath_by_locale_1.getSubpathByLocale(config.domains, locale);
    const pathWithoutLocale = strip_locale_path_segment_1.stripLocalePathSegment(path, subpath);
    return strip_trailing_slash_1.stripTrailingSlash(pathWithoutLocale);
};
exports.removeLocaleFromPath = removeLocaleFromPath;
