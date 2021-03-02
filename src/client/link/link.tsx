import NextLink, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { FunctionComponent } from "react"

export const Link: FunctionComponent<LinkProps> = (props) => {
  const { locale } = useRouter()

  return <NextLink {...props} href={`/${locale}${props.href}`} />
}
