import { parse } from "querystring";
export var getQueryParameters = function getQueryParameters(url) {
  var search = url.search;

  if (search === "" || search === "?") {
    return {};
  }

  var query = search.startsWith("?") ? search.substring(1) : search;
  return parse(query);
};