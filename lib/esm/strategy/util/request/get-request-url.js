import { format, URL } from "url";
export var getRequestUrl = function getRequestUrl(request) {
  var protocol = request.protocol;
  var host = request.hostname;
  var base = format({
    protocol: protocol,
    host: host,
    slashes: true
  });
  return new URL(request.url, base);
};