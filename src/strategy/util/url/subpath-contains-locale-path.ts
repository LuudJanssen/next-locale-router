import { ISubpath } from "../../../subpath.interface"
import { cleanPathSegment } from "./clean-path-segment"

export const subpathContainsLocalePath = (subpath: ISubpath, localePath: string) =>
  cleanPathSegment(subpath.path) === localePath
