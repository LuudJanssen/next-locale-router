"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInternalNextRequest = void 0;
const get_path_segments_1 = require("../url/get-path-segments");
const isInternalNextRequest = (url) => {
    const [firstPathSegment = ""] = get_path_segments_1.getPathSegments(url.pathname);
    return firstPathSegment.startsWith("_next") || firstPathSegment.startsWith("__next");
};
exports.isInternalNextRequest = isInternalNextRequest;
