import { ISubpath } from "../subpath.interface"

export const getSubpathsLocales = (subpaths: ISubpath[]): string[] =>
  subpaths.map((subpath) => subpath.locale)
