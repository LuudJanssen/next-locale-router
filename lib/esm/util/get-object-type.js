import _typeof from "@babel/runtime/helpers/typeof";
export var getObjectType = function getObjectType(object) {
  if (object === null) {
    return "null";
  }

  return _typeof(object);
};