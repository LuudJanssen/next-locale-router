import { IDomain } from "../domain.interface"

export const getDomainByHostname = (domains: IDomain[], hostname: string) => {
  return domains.find((domain) => domain.hostname === hostname)
}
