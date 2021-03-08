"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLocaleRouter = void 0;
const bootstrap_1 = require("./bootstrap");
const config = bootstrap_1.bootstrap();
exports.default = config;
var with_locale_router_1 = require("./with-locale-router");
Object.defineProperty(exports, "withLocaleRouter", { enumerable: true, get: function () { return with_locale_router_1.withLocaleRouter; } });
