import React, { Children, isValidElement } from "react";
export const getLocaleRewriterChild = children => {
  let child = Children.only(children);

  if (typeof child === "string") {
    child = /*#__PURE__*/React.createElement("a", null, children);
  }

  if (! /*#__PURE__*/isValidElement(child)) {
    throw new Error("The child passed to next-locale-router's `<Link>` is not a valid React component. Please only add strings or React elements as children to `<Link>`.");
  }

  return child;
};