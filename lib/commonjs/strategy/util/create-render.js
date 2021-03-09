"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRender = void 0;

require("core-js/modules/es.string.ends-with.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.exec.js");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _chainable = require("../chainable");

var _getQueryParameters = require("./url/get-query-parameters");

var _getRenderQueryParameters = require("./url/get-render-query-parameters");

var _stripTrailingSlash = require("./url/strip-trailing-slash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createRender = function createRender(url, subpath, domain) {
  var queryParameters = (0, _getQueryParameters.getQueryParameters)(url);

  var query = _objectSpread(_objectSpread({}, queryParameters), (0, _getRenderQueryParameters.getRenderQueryParameters)(subpath.locale, domain));

  var normalizedPathname = url.pathname.endsWith("/") ? url.pathname : url.pathname + "/";
  var pathname = (0, _stripTrailingSlash.stripTrailingSlash)(normalizedPathname.replace(subpath.path, "/"));
  return new _chainable.ChainableRenderStrategy({
    pathname: pathname,
    query: query
  });
};

exports.createRender = createRender;