import * as c from "./constants";

export const fetchPulls = ({ creator, repo }) => (
  dispatch
) => {
  dispatch({
    type: c.FETCH_PULLS,
    payload: {
      request: {
        url: `/repos/${creator}/${repo}/pulls`,
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
};