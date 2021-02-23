export const prefixPathname = (pathname: string, prefix: string) => {
  let normalizedPrefix = prefix

  if (pathname.startsWith("/") && prefix.endsWith("/")) {
    normalizedPrefix = prefix.substring(0, prefix.length - 1)
  }

  return normalizedPrefix + pathname
}
