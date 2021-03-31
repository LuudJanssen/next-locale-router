export const getPathSegments = (pathname: string) =>
  pathname.split("/").filter((segment) => segment !== "")
