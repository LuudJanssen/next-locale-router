"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePathnameWithRedirect = void 0;
const clean_path_segment_1 = require("./clean-path-segment");
const get_path_segments_1 = require("./get-path-segments");
const updatePathnameWithRedirect = (pathname, redirect) => {
    if (pathname === null) {
        return redirect.destination;
    }
    const [firstPathSegment, ...pathSegments] = get_path_segments_1.getPathSegments(pathname);
    const destinationPathSegment = clean_path_segment_1.cleanPathSegment(redirect.destination);
    const destinationPathSegments = destinationPathSegment ? [destinationPathSegment] : [];
    if (firstPathSegment === clean_path_segment_1.cleanPathSegment(redirect.source)) {
        return "/" + [...destinationPathSegments, ...pathSegments].join("/");
    }
    return "/" + [...destinationPathSegments, firstPathSegment, ...pathSegments].join("/");
};
exports.updatePathnameWithRedirect = updatePathnameWithRedirect;
