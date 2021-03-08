"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlMatchRedirects = void 0;
const clean_path_segment_1 = require("./clean-path-segment");
const get_path_segments_1 = require("./get-path-segments");
const urlMatchRedirects = (url, redirects) => {
    const pathSegments = get_path_segments_1.getPathSegments(url.pathname);
    const [expectedLocalePathSegment] = pathSegments;
    if (typeof expectedLocalePathSegment === "undefined") {
        return undefined;
    }
    return redirects.find(({ source }) => clean_path_segment_1.cleanPathSegment(source) === expectedLocalePathSegment);
};
exports.urlMatchRedirects = urlMatchRedirects;
