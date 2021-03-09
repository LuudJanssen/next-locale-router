"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatUrl = void 0;

var _url = require("url");

var formatUrl = function formatUrl(url) {
  return (0, _url.format)(url);
};

exports.formatUrl = formatUrl;