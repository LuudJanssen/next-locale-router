import React, { Children, isValidElement, ReactNode } from "react"

export const getLocaleRewriterChild = (children: ReactNode) => {
  let child = Children.only(children)

  if (typeof child === "string") {
    child = <a>{children}</a>
  }

  if (!isValidElement(child)) {
    throw new Error(
      "The child passed to next-locale-router's `<Link>` is not a valid React component. Please only add strings or React elements as children to `<Link>`.",
    )
  }

  return child
}
