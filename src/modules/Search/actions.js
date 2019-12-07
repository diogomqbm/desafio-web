import * as c from "./constants";

export const fetchRepos = (payload) => (
  dispatch
) => {
  const { queryString, sort, page } = payload;
  return dispatch({
    type: c.FETCH_REPOS,
    payload: {
      request: {
        url: `/search/repositories?q=${queryString}&sort=${sort}&page=${page}`,
        method: "GET"
      },
      options: {
        onSuccess: ({ getState, dispatch, response }) => {
          dispatch({
            type: c.FETCH_REPOS_SUCCESS,
            payload: {
              data: response.data
            }
          })
        },
        onError: ({ getState, dispatch, error }) => {
          dispatch({
            type: c.FETCH_REPOS_FAIL,
            payload: {
              error
            }
          })
        }
      }
    }
  })
}