import { URL } from "url"
import { IDomain } from "../../../domain.interface"
import { getLocalePathSegment } from "./get-locale-path-segment"

export const urlMatchDomains = (url: URL, domains: IDomain[]): IDomain | undefined => {
  return domains.find((domain) => typeof getLocalePathSegment([domain], url) !== "undefined")
}
