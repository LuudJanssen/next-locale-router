interface NextLinkChildProps {
  onClick: React.MouseEventHandler
  href?: string
}

export type LocaleRewriterProps = React.PropsWithChildren<Partial<NextLinkChildProps>> & {
  locale?: string
  replace: boolean
}

type LocaleRewriterPropsWithoutChildren = Omit<LocaleRewriterProps, "children">

export const verifyLocaleRewriterProps = ({
  locale,
  href,
  onClick,
  replace,
}: LocaleRewriterPropsWithoutChildren): Required<LocaleRewriterPropsWithoutChildren> => {
  if (typeof locale === "undefined") {
    throw new Error(
      "The `locale` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Are you running Next.js in i18n mode?",
    )
  }

  if (typeof href === "undefined") {
    throw new Error(
      "The `href` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Forgot to add `passHref` as prop to next/link?",
    )
  }

  if (typeof onClick === "undefined") {
    throw new Error(
      "The `onClick` property needs to be defined on next-locale-router's `<LinkLocaleRewriter>`. Are you using `<LinkLocaleRewriter>` outside of next/link?",
    )
  }

  return {
    locale,
    href,
    onClick,
    replace,
  }
}
