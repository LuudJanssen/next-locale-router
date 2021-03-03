import NextLink, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { forwardRef, FunctionComponent } from "react"
import { getLocaleRedirects } from "../../util/get-locale-redirects"
import { useLocaleRouterConfig } from "../config"
import { getLocaleRewriterChild } from "./util/get-locale-rewriter-child"
import { getLocaleRewriterHref } from "./util/get-locale-rewriter-href"
import { LocaleRewriterProps, verifyLocaleRewriterProps } from "./util/locale-rewriter-props.type"

const LinkLocaleRewriter = forwardRef<HTMLElement, LocaleRewriterProps>(
  ({ children, ...props }, ref) => {
    // next/link forces these props on its child component
    // They'll only be available when this component is the child of next/link
    const { onClick, href: originalHref, locale } = verifyLocaleRewriterProps(props)
    const { domains } = useLocaleRouterConfig()
    const redirects = domains.flatMap(getLocaleRedirects)

    const redirectForLocale = redirects.find(
      ({ locale: redirectLocale }) => redirectLocale === locale,
    )

    const href = getLocaleRewriterHref(originalHref, redirectForLocale)
    const child = getLocaleRewriterChild(children)

    return React.cloneElement(child, { ...props, href, ref })
  },
)

export const Link: FunctionComponent<LinkProps> = ({ children, ...props }) => {
  const { locale: currentLocale } = useRouter()

  return (
    <NextLink {...props} passHref>
      <LinkLocaleRewriter locale={props.locale || currentLocale}>{children}</LinkLocaleRewriter>
    </NextLink>
  )
}