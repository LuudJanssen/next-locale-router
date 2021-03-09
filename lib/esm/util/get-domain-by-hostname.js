export var getDomainByHostname = function getDomainByHostname(domains, hostname) {
  return domains.find(function (domain) {
    return domain.hostname === hostname;
  });
};