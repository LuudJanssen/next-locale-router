export const stripTrailingSlash = (pathname: string) => {
  if (pathname === "/" || pathname === "") {
    return "/"
  }

  return pathname.endsWith("/") ? pathname.substring(0, pathname.length - 1) : pathname
}
