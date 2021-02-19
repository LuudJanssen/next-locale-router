import { getObjectType } from "./get-object-type"

export const isObject = (object: any): object is Record<string, any> => {
  return getObjectType(object) === "object"
}
