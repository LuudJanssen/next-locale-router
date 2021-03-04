"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectType = void 0;
const getObjectType = (object) => {
    if (object === null) {
        return "null";
    }
    return typeof object;
};
exports.getObjectType = getObjectType;
