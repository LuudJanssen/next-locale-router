export var getLocaleRedirects = function getLocaleRedirects(domain) {
  return domain.subpaths.map(function (_ref) {
    var locale = _ref.locale,
        path = _ref.path;
    return {
      source: "/".concat(locale, "/"),
      locale: locale,
      destination: path
    };
  }).filter(function (_ref2) {
    var source = _ref2.source,
        destination = _ref2.destination;
    return source !== destination;
  });
};