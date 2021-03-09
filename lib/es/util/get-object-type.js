export const getObjectType = object => {
  if (object === null) {
    return "null";
  }

  return typeof object;
};