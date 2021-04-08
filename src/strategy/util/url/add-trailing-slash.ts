export const addTrailingSlash = (pathname: string) => {
  if (pathname === "/" || pathname === "") {
    return "/"
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`
}
