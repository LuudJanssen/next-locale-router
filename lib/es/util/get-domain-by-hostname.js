export const getDomainByHostname = (domains, hostname) => {
  return domains.find(domain => domain.hostname === hostname);
};