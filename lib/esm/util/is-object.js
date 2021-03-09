import { getObjectType } from "./get-object-type";
export var isObject = function isObject(object) {
  return getObjectType(object) === "object";
};