"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

var _getObjectType = require("./get-object-type");

var isObject = function isObject(object) {
  return (0, _getObjectType.getObjectType)(object) === "object";
};

exports.isObject = isObject;