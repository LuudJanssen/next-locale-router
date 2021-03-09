"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocaleRewriterChild = void 0;

var _react = _interopRequireWildcard(require("react"));

var __jsx = _react["default"].createElement;

var getLocaleRewriterChild = function getLocaleRewriterChild(children) {
  var child = _react.Children.only(children);

  if (typeof child === "string") {
    child = __jsx("a", null, children);
  }

  if (! /*#__PURE__*/(0, _react.isValidElement)(child)) {
    throw new Error("The child passed to next-locale-router's `<Link>` is not a valid React component. Please only add strings or React elements as children to `<Link>`.");
  }

  return child;
};

exports.getLocaleRewriterChild = getLocaleRewriterChild;