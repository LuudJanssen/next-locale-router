"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalesForDomains = void 0;
const get_subpaths_locales_1 = require("./get-subpaths-locales");
const getLocalesForDomains = (domains) => domains.flatMap((domain) => get_subpaths_locales_1.getSubpathsLocales(domain.subpaths));
exports.getLocalesForDomains = getLocalesForDomains;
