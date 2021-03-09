"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryParameters = void 0;

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.starts-with.js");

var _querystring = require("querystring");

var getQueryParameters = function getQueryParameters(url) {
  var search = url.search;

  if (search === "" || search === "?") {
    return {};
  }

  var query = search.startsWith("?") ? search.substring(1) : search;
  return (0, _querystring.parse)(query);
};

exports.getQueryParameters = getQueryParameters;