import { format, URL } from "url";
export const getRequestUrl = request => {
  const protocol = request.protocol;
  const host = request.hostname;
  const base = format({
    protocol,
    host,
    slashes: true
  });
  return new URL(request.url, base);
};