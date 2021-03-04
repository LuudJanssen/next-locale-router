"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigValidationError = void 0;
class ConfigValidationError extends Error {
    constructor() {
        super(...arguments);
        this.name = "ConfigValidationError";
    }
}
exports.ConfigValidationError = ConfigValidationError;
