function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { forwardRef } from "react";
import { useLocaleRedirect } from "../util/use-locale-redirect.hook";
import { getLocaleRewriterChild } from "./util/get-locale-rewriter-child";
import { getLocaleRewriterHref } from "./util/get-locale-rewriter-href";
import { verifyLocaleRewriterProps } from "./util/locale-rewriter-props.type";
import { wrapClickHandlerWithRewrite } from "./util/wrap-click-handler-with-rewrite";
const LinkLocaleRewriter = /*#__PURE__*/forwardRef(({
  children,
  ...props
}, ref) => {
  // next/link forces these props on its child component
  // They'll only be available when this component is the child of next/link
  const {
    onClick: originalOnClick,
    href: originalHref,
    locale,
    ...childProps
  } = verifyLocaleRewriterProps(props);
  const redirectForLocale = useLocaleRedirect(locale);
  const href = getLocaleRewriterHref(originalHref, redirectForLocale);
  const child = getLocaleRewriterChild(children);
  const onClick = wrapClickHandlerWithRewrite(originalOnClick, redirectForLocale);
  return /*#__PURE__*/React.cloneElement(child, { ...childProps,
    onClick,
    href,
    ref
  });
});
export const Link = ({
  children,
  ...props
}) => {
  const {
    locale: currentLocale
  } = useRouter();
  return /*#__PURE__*/React.createElement(NextLink, _extends({}, props, {
    passHref: true
  }), /*#__PURE__*/React.createElement(LinkLocaleRewriter, {
    locale: props.locale || currentLocale
  }, children));
};