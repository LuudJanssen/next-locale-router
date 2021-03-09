export var alwaysReturn = function alwaysReturn(value) {
  return function () {
    return value;
  };
};