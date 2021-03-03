"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleSubpathsForDomains = void 0;
const getLocaleSubpathsForDomains = (domains) => domains.flatMap((domain) => domain.subpaths).map((subpath) => subpath.path);
exports.getLocaleSubpathsForDomains = getLocaleSubpathsForDomains;
