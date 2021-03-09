"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRedirectToDomain = void 0;

var _url = require("url");

var _chainable = require("../chainable");

var _replaceHostnameInUrl = require("./url/replace-hostname-in-url");

var createRedirectToDomain = function createRedirectToDomain(url, domain) {
  var urlObject = (0, _replaceHostnameInUrl.replaceHostnameInUrl)(url, domain.hostname);
  var formattedUrl = (0, _url.format)(urlObject);
  return new _chainable.ChainablePermanentRedirectStrategy({
    location: formattedUrl
  });
};

exports.createRedirectToDomain = createRedirectToDomain;