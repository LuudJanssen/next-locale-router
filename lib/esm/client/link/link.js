import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var __jsx = React.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { forwardRef } from "react";
import { useLocaleRedirect } from "../util/use-locale-redirect.hook";
import { getLocaleRewriterChild } from "./util/get-locale-rewriter-child";
import { getLocaleRewriterHref } from "./util/get-locale-rewriter-href";
import { verifyLocaleRewriterProps } from "./util/locale-rewriter-props.type";
import { wrapClickHandlerWithRewrite } from "./util/wrap-click-handler-with-rewrite";
var LinkLocaleRewriter = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  // next/link forces these props on its child component
  // They'll only be available when this component is the child of next/link
  var _verifyLocaleRewriter = verifyLocaleRewriterProps(props),
      originalOnClick = _verifyLocaleRewriter.onClick,
      originalHref = _verifyLocaleRewriter.href,
      locale = _verifyLocaleRewriter.locale,
      childProps = _objectWithoutProperties(_verifyLocaleRewriter, ["onClick", "href", "locale"]);

  var redirectForLocale = useLocaleRedirect(locale);
  var href = getLocaleRewriterHref(originalHref, redirectForLocale);
  var child = getLocaleRewriterChild(children);
  var onClick = wrapClickHandlerWithRewrite(originalOnClick, redirectForLocale);
  return /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({}, childProps), {}, {
    onClick: onClick,
    href: href,
    ref: ref
  }));
});
export var Link = function Link(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  var _useRouter = useRouter(),
      currentLocale = _useRouter.locale;

  return __jsx(NextLink, _extends({}, props, {
    passHref: true
  }), __jsx(LinkLocaleRewriter, {
    locale: props.locale || currentLocale
  }, children));
};