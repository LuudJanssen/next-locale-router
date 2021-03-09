import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { format, parse } from "url";
import { logger } from "../logger";
import { StrategyType } from "./strategy.type";
import { getRequestUrl } from "./util/request/get-request-url";
export var StrategyHandler = /*#__PURE__*/function () {
  function StrategyHandler(app) {
    _classCallCheck(this, StrategyHandler);

    this.app = app;

    _defineProperty(this, "handle", void 0);

    this.handle = app.getRequestHandler();
  }

  _createClass(StrategyHandler, [{
    key: "handleStrategy",
    value: function handleStrategy(strategy, request, response, next) {
      if (strategy.type === StrategyType.RENDER) {
        return this.handleWithConfigOverride(strategy, request, response);
      }

      if (strategy.type === StrategyType.PERMANENT_REDIRECT) {
        if (this.isRedirectLoop(request, strategy)) {
          logger.error("Redirect loop avoided for hostname \"".concat(request.hostname, "\". Location was already \"").concat(strategy.data.location, "\"."));
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
          config = _objectWithoutProperties(_this$app$nextConfig, ["i18n"]);

      this.app.nextConfig = config;

      var _parse = parse(request.url),
          pathname = _parse.pathname,
          url = _objectWithoutProperties(_parse, ["pathname"]);

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
      var _getRequestUrl = getRequestUrl(request),
          search = _getRequestUrl.search,
          hash = _getRequestUrl.hash,
          pathname = _getRequestUrl.pathname;

      var originalPath = format({
        search: search,
        hash: hash,
        pathname: pathname
      });
      return originalPath === strategy.data.location;
    }
  }]);

  return StrategyHandler;
}();