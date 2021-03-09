"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectType = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var getObjectType = function getObjectType(object) {
  if (object === null) {
    return "null";
  }

  return (0, _typeof2["default"])(object);
};

exports.getObjectType = getObjectType;