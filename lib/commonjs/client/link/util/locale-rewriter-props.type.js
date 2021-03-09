"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyLocaleRewriterProps = void 0;

var verifyLocaleRewriterProps = function verifyLocaleRewriterProps(_ref) {
  var locale = _ref.locale,
      href = _ref.href,
      onClick = _ref.onClick;

  if (typeof locale === "undefined") {
    throw new Error("The `locale` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Are you running Next.js in i18n mode?");
  }

  if (typeof href === "undefined") {
    throw new Error("The `href` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Forgot to add `passHref` as prop to next/link?");
  }

  if (typeof onClick === "undefined") {
    throw new Error("The `onClick` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Are you using `<LinkLocaleRewriter>` outside of next/link?");
  }

  return {
    locale: locale,
    href: href,
    onClick: onClick
  };
};

exports.verifyLocaleRewriterProps = verifyLocaleRewriterProps;