"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRedirect = void 0;

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.regexp.exec.js");

var _url = require("url");

var _chainable = require("../chainable");

var _formatUrl = require("./url/format-url");

var _stripTrailingSlash = require("./url/strip-trailing-slash");

var _updatePathnameWithRedirect = require("./url/update-pathname-with-redirect");

var createRedirect = function createRedirect(url, redirect) {
  var _parse = (0, _url.parse)((0, _formatUrl.formatUrl)(url)),
      pathname = _parse.pathname,
      search = _parse.search,
      hash = _parse.hash; // We need the legacy Node.js API url format


  var newPathname = (0, _updatePathnameWithRedirect.updatePathnameWithRedirect)(pathname, redirect);
  var formattedPathname = (0, _url.format)({
    search: search,
    hash: hash,
    pathname: (0, _stripTrailingSlash.stripTrailingSlash)(newPathname)
  });
  return new _chainable.ChainablePermanentRedirectStrategy({
    location: formattedPathname
  });
};

exports.createRedirect = createRedirect;