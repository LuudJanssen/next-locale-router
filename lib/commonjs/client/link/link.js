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

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _link = _interopRequireDefault(require("next/link"));

var _router = require("next/router");

var _react = _interopRequireWildcard(require("react"));

var _useLocaleRedirect = require("../util/use-locale-redirect.hook");

var _getLocaleRewriterChild = require("./util/get-locale-rewriter-child");

var _getLocaleRewriterHref = require("./util/get-locale-rewriter-href");

var _localeRewriterProps = require("./util/locale-rewriter-props.type");

var _wrapClickHandlerWithRewrite = require("./util/wrap-click-handler-with-rewrite");

var __jsx = _react["default"].createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LinkLocaleRewriter = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  // next/link forces these props on its child component
  // They'll only be available when this component is the child of next/link
  var _verifyLocaleRewriter = (0, _localeRewriterProps.verifyLocaleRewriterProps)(props),
      originalOnClick = _verifyLocaleRewriter.onClick,
      originalHref = _verifyLocaleRewriter.href,
      locale = _verifyLocaleRewriter.locale,
      childProps = (0, _objectWithoutProperties2["default"])(_verifyLocaleRewriter, ["onClick", "href", "locale"]);

  var redirectForLocale = (0, _useLocaleRedirect.useLocaleRedirect)(locale);
  var href = (0, _getLocaleRewriterHref.getLocaleRewriterHref)(originalHref, redirectForLocale);
  var child = (0, _getLocaleRewriterChild.getLocaleRewriterChild)(children);
  var onClick = (0, _wrapClickHandlerWithRewrite.wrapClickHandlerWithRewrite)(originalOnClick, redirectForLocale);
  return /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread(_objectSpread({}, childProps), {}, {
    onClick: onClick,
    href: href,
    ref: ref
  }));
});

var Link = function Link(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["children"]);

  var _useRouter = (0, _router.useRouter)(),
      currentLocale = _useRouter.locale;

  return __jsx(_link["default"], (0, _extends2["default"])({}, props, {
    passHref: true
  }), __jsx(LinkLocaleRewriter, {
    locale: props.locale || currentLocale
  }, children));
};

exports.Link = Link;