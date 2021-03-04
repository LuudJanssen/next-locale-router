"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlMatchSubpaths = void 0;
const clean_path_segment_1 = require("./clean-path-segment");
const get_path_segments_1 = require("./get-path-segments");
const urlMatchSubpaths = (url, subpaths) => {
    const pathSegments = get_path_segments_1.getPathSegments(url.pathname);
    // Default to "/" if there were no path segments
    const [expectedLocalePathSegment = "/"] = pathSegments;
    return subpaths.find(({ path }) => clean_path_segment_1.cleanPathSegment(expectedLocalePathSegment) === clean_path_segment_1.cleanPathSegment(path));
};
exports.urlMatchSubpaths = urlMatchSubpaths;
