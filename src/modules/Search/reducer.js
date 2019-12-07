import produce from "immer";
import * as c from "./constants";

const INITIAL_STATE = {
    repos: [],
    loading: false,
    empty: false,
    error: ""
}

const search = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case c.FETCH_REPOS:
        draft.loading = true;
        return;

      case c.FETCH_REPOS_SUCCESS:
        draft.loading = false;
        if (payload.data) {
          draft.repos = payload.data;
        } else {
          draft.empty = true;
        }
        return;

      case c.FETCH_REPOS_FAIL:
        draft.loading = false;
        draft.error = payload.error;
        return;

      default:
        return;
    }
  });

export default search;