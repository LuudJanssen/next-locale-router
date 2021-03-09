export var isDebugMode = function isDebugMode() {
  return process.env.NEXT_PUBLIC_LOCALE_ROUTER_DEBUG === "true";
};