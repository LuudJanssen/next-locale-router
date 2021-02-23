import { cleanPathSegment } from "../strategy/util/url/clean-path-segment"
import { ISubpath } from "../subpath.interface"

export const subpathContainsLocalePath = (subpath: ISubpath, localePath: string) =>
  cleanPathSegment(subpath.path) === localePath
