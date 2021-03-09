export var getLocaleSubpathsForDomains = function getLocaleSubpathsForDomains(domains) {
  return domains.flatMap(function (domain) {
    return domain.subpaths;
  }).map(function (subpath) {
    return subpath.path;
  });
};