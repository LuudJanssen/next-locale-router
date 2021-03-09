export const getLocaleRedirects = domain => domain.subpaths.map(({
  locale,
  path
}) => ({
  source: `/${locale}/`,
  locale: locale,
  destination: path
})).filter(({
  source,
  destination
}) => source !== destination);