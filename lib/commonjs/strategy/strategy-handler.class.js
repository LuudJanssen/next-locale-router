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
exports.StrategyHandler = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.regexp.exec.js");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _url = require("url");

var _logger = require("../logger");

var _strategy = require("./strategy.type");

var _getRequestUrl2 = require("./util/request/get-request-url");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StrategyHandler = /*#__PURE__*/function () {
  function StrategyHandler(app) {
    (0, _classCallCheck2["default"])(this, StrategyHandler);
    this.app = app;
    (0, _defineProperty2["default"])(this, "handle", void 0);
    this.handle = app.getRequestHandler();
  }

  (0, _createClass2["default"])(StrategyHandler, [{
    key: "handleStrategy",
    value: function handleStrategy(strategy, request, response, next) {
      if (strategy.type === _strategy.StrategyType.RENDER) {
        return this.handleWithConfigOverride(strategy, request, response);
      }

      if (strategy.type === _strategy.StrategyType.PERMANENT_REDIRECT) {
        if (this.isRedirectLoop(request, strategy)) {
          _logger.logger.error("Redirect loop avoided for hostname \"".concat(request.hostname, "\". Location was already \"").concat(strategy.data.location, "\"."));

          return next();
        }

        return response.redirect(308, strategy.data.location);
      }

      next();
    }
  }, {
    key: "handleWithConfigOverride",
    value: function handleWithConfigOverride(strategy, request, response) {
      // This strategy temporarily
      var _this$app$nextConfig = this.app.nextConfig,
          originalI18n = _this$app$nextConfig.i18n,
          config = (0, _objectWithoutProperties2["default"])(_this$app$nextConfig, ["i18n"]);
      this.app.nextConfig = config;

      var _parse = (0, _url.parse)(request.url),
          pathname = _parse.pathname,
          url = (0, _objectWithoutProperties2["default"])(_parse, ["pathname"]);

      this.handle(request, response, _objectSpread(_objectSpread({}, url), {}, {
        pathname: strategy.data.pathname,
        query: strategy.data.query
      }));
      this.app.nextConfig = _objectSpread(_objectSpread({}, this.app.nextConfig), {}, {
        i18n: originalI18n
      });
      return;
    }
  }, {
    key: "isRedirectLoop",
    value: function isRedirectLoop(request, strategy) {
      var _getRequestUrl = (0, _getRequestUrl2.getRequestUrl)(request),
          search = _getRequestUrl.search,
          hash = _getRequestUrl.hash,
          pathname = _getRequestUrl.pathname;

      var originalPath = (0, _url.format)({
        search: search,
        hash: hash,
        pathname: pathname
      });
      return originalPath === strategy.data.location;
    }
  }]);
  return StrategyHandler;
}();

exports.StrategyHandler = StrategyHandler;