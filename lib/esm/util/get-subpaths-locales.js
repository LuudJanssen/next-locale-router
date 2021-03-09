export var getSubpathsLocales = function getSubpathsLocales(subpaths) {
  return subpaths.map(function (subpath) {
    return subpath.locale;
  });
};