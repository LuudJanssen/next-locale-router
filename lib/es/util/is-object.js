import { getObjectType } from "./get-object-type";
export const isObject = object => {
  return getObjectType(object) === "object";
};