import { ISubpath } from "../../../subpath.interface"

export const stripLocalePathSegment = (pathname: string, subpath: ISubpath) => {
  const normalizedPathname = pathname.endsWith("/") ? pathname : pathname + "/"
  return normalizedPathname.replace(subpath.path, "/")
}
