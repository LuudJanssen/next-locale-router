import { parse } from "querystring";
export const getQueryParameters = url => {
  const search = url.search;

  if (search === "" || search === "?") {
    return {};
  }

  const query = search.startsWith("?") ? search.substring(1) : search;
  return parse(query);
};