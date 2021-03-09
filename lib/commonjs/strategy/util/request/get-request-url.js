"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequestUrl = void 0;

var _url = require("url");

var getRequestUrl = function getRequestUrl(request) {
  var protocol = request.protocol;
  var host = request.hostname;
  var base = (0, _url.format)({
    protocol: protocol,
    host: host,
    slashes: true
  });
  return new _url.URL(request.url, base);
};

exports.getRequestUrl = getRequestUrl;