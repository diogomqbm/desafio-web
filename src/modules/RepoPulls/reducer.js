import produce from "immer";
import * as c from "./constants";

const INITIAL_STATE = {
  pulls: {},
  loading: false,
  empty: false,
  error: "",
};

const pulls = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case c.FETCH_PULLS:
        draft.loading = true;
        return;

      case c.FETCH_PULLS_SUCCESS:
        draft.loading = false;
        if (payload.data) {
          draft.pulls = payload.data;
        } else {
          draft.empty = true;
        }
        return;

      case c.FETCH_PULLS_FAIL:
        draft.loading = false;
        draft.error = payload.error;
        return;
    }
  });

export default pulls;