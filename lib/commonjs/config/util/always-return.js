"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alwaysReturn = void 0;

var alwaysReturn = function alwaysReturn(value) {
  return function () {
    return value;
  };
};

exports.alwaysReturn = alwaysReturn;