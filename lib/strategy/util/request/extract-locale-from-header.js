"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractLocaleFromHeader = void 0;
const negotiator_1 = __importDefault(require("negotiator"));
const extractLocaleFromHeader = (request, locales) => {
    const negotiator = new negotiator_1.default(request);
    return negotiator.language(locales);
};
exports.extractLocaleFromHeader = extractLocaleFromHeader;
