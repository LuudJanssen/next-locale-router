export const getObjectType = (object: any): string => {
  if (object === null) {
    return "null"
  }

  return typeof object
}
