import {ParsedUrlQuery} from "querystring"

export const getParameter = (
  qs: ParsedUrlQuery,
  key: string,
): string | undefined => {
  const got = qs[key]
  if (got === undefined) {
    return undefined
  }
  return Array.isArray(got) ? got[0] : got
}
