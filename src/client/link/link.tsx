import NextLink, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { forwardRef, FunctionComponent } from "react"
import { getLocaleRedirects } from "../../util/get-locale-redirects"
import { useLocaleRouterConfig } from "../config"
import { NoUrlBaseOrBrowserError } from "./util/no-url-base-or-browser.error"
import { updateHrefWithRedirect } from "./util/update-href-with-redirect"

interface NextLinkChildProps {
  onClick: React.MouseEventHandler
  href?: string
}

type LinkLocaleRewriterProps = React.PropsWithChildren<Partial<NextLinkChildProps>> & {
  locale?: string
}

const LinkLocaleRewriter = forwardRef<HTMLElement, LinkLocaleRewriterProps>(
  ({ children, locale, ...props }, ref) => {
    // next/link forces these props on its child component
    // They'll only be available when this component is the child of next/link
    const { onClick, href: originalHref } = props
    const { domains } = useLocaleRouterConfig()
    const redirects = domains.flatMap(getLocaleRedirects)

    if (typeof locale === "undefined") {
      throw new Error(
        "The `locale` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Are you running Next.js in i18n mode?",
      )
    }

    if (typeof originalHref === "undefined") {
      throw new Error(
        "The `href` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Forgot to add `passHref` as prop to next/link?",
      )
    }

    if (typeof onClick === "undefined") {
      throw new Error(
        "The `onClick` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Are you using `<LinkLocaleRewriter>` outside of next/link?",
      )
    }

    const redirectForLocale = redirects.find(
      ({ locale: redirectLocale }) => redirectLocale === locale,
    )

    let href: string
    try {
      href = redirectForLocale
        ? updateHrefWithRedirect(originalHref, redirectForLocale)
        : originalHref
    } catch (error) {
      if (error instanceof NoUrlBaseOrBrowserError) {
        throw new Error(
          "The `href` property on  next-locale-router's `<LinkLocaleRewriter>` component is missing an origin and rendering was happening outside of a browser environment. Can't construct the full URL.",
        )
      }

      throw error
    }

    let child = React.Children.only(children)
    if (typeof child === "string") {
      child = <a>{children}</a>
    }

    if (!React.isValidElement(child)) {
      throw new Error(
        "The child passed to next-locale-router's `<Link>` is not a valid React component. Please only add strings or React elements as children to `<Link>`.",
      )
    }

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
