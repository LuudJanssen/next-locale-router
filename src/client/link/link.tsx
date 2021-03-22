import NextLink, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { forwardRef, FunctionComponent, MouseEventHandler } from "react"
import { useLocaleRedirect } from "../util/use-locale-redirect.hook"
import { getLocaleRewriterChild } from "./util/get-locale-rewriter-child"
import { getLocaleRewriterHref } from "./util/get-locale-rewriter-href"
import { LocaleRewriterProps, verifyLocaleRewriterProps } from "./util/locale-rewriter-props.type"
import { wrapClickHandlerWithRewrite } from "./util/wrap-click-handler-with-rewrite"

const LinkLocaleRewriter = forwardRef<HTMLElement, LocaleRewriterProps>(
  ({ children, ...props }, ref) => {
    // next/link forces these props on its child component
    // They'll only be available when this component is the child of next/link
    const {
      onClick: originalOnClick,
      href: originalHref,
      locale,
      replace,
      ...childProps
    } = verifyLocaleRewriterProps(props)

    const redirectForLocale = useLocaleRedirect(locale)
    const href = getLocaleRewriterHref(originalHref, redirectForLocale)
    const child = getLocaleRewriterChild(children)
    const historyMethod = replace ? "replaceState" : "pushState"

    const nextOnClick = wrapClickHandlerWithRewrite(
      originalOnClick,
      historyMethod,
      redirectForLocale,
    )

    const onClick: MouseEventHandler = (event) => {
      if (child.props && typeof child.props.onClick === "function") {
        child.props.onClick(event)
      }

      if (event.defaultPrevented) {
        return
      }

      nextOnClick(event)
    }

    return React.cloneElement(child, { ...childProps, onClick, href, ref })
  },
)

export const Link: FunctionComponent<LinkProps> = ({ children, ...props }) => {
  const { locale: currentLocale } = useRouter()

  return (
    <NextLink {...props} passHref>
      <LinkLocaleRewriter locale={props.locale || currentLocale} replace={props.replace ?? false}>
        {children}
      </LinkLocaleRewriter>
    </NextLink>
  )
}
