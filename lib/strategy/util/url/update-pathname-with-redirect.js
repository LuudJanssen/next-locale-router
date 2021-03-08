"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePathnameWithRedirect = void 0;
const isNil_1 = __importDefault(require("lodash/isNil"));
const clean_path_segment_1 = require("./clean-path-segment");
const get_path_segments_1 = require("./get-path-segments");
const updatePathnameWithRedirect = (pathname, redirect) => {
    if (isNil_1.default(pathname)) {
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
