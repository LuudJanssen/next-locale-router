"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractNextLocaleCookie = void 0;
var detect_locale_cookie_1 = require("next/dist/next-server/lib/i18n/detect-locale-cookie");
Object.defineProperty(exports, "extractNextLocaleCookie", { enumerable: true, get: function () { return detect_locale_cookie_1.detectLocaleCookie; } });
