"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleRedirects = void 0;
const getLocaleRedirects = (domain) => domain.subpaths
    .map(({ locale, path }) => ({
    source: `/${locale}/`,
    locale: locale,
    destination: path,
}))
    .filter(({ source, destination }) => source !== destination);
exports.getLocaleRedirects = getLocaleRedirects;
