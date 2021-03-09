"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceHostnameInUrl = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.date.to-string.js");

var _url = require("url");

var replaceHostnameInUrl = function replaceHostnameInUrl(url, newHostname) {
  var newUrl = new _url.URL(url.toString());
  newUrl.hostname = newHostname;
  return newUrl;
};

exports.replaceHostnameInUrl = replaceHostnameInUrl;