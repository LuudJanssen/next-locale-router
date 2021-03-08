"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalePathSegment = void 0;
const get_locale_path_segments_for_locale_1 = require("../../../util/get-locale-path-segments-for-locale");
const get_path_segments_1 = require("./get-path-segments");
const getLocalePathSegment = (validDomains, url) => {
    const pathSegments = get_path_segments_1.getPathSegments(url.pathname);
    const [expectedLocalePathSegment] = pathSegments;
    if (typeof expectedLocalePathSegment === "undefined") {
        return undefined;
    }
    const localePathSegments = validDomains.flatMap(get_locale_path_segments_for_locale_1.getLocalePathSegmentsForDomain);
    const isLocaleRelatedSegment = localePathSegments.includes(expectedLocalePathSegment);
    if (!isLocaleRelatedSegment) {
        return undefined;
    }
    return expectedLocalePathSegment;
};
exports.getLocalePathSegment = getLocalePathSegment;
