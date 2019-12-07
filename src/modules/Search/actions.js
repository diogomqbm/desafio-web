import * as c from "./constants";

export const fetchRepos = ({ queryString, sort, page }) => (
  dispatch
) => {
  dispatch({
    type: c.FETCH_REPOS,
    payload: {
      request: {
        url: `/search/repositories?q=${queryString}&sort=${sort}&page=${page}`,
        method: "GET"
      },
      options: {
        onSuccess: ({ getState, dispatch, response }) => {
          console.log(response)
        },
        onError: ({ getState, dispatch, error }) => {
          console.log(error)
        }
      }
    }
  })
}