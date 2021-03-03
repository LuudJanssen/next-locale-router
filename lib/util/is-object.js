"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
const get_object_type_1 = require("./get-object-type");
const isObject = (object) => {
    return get_object_type_1.getObjectType(object) === "object";
};
exports.isObject = isObject;
