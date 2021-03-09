"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLocaleFromHeader = void 0;

var _negotiator = _interopRequireDefault(require("negotiator"));

var extractLocaleFromHeader = function extractLocaleFromHeader(request, locales) {
  var negotiator = new _negotiator["default"](request);
  return negotiator.language(locales);
};

exports.extractLocaleFromHeader = extractLocaleFromHeader;