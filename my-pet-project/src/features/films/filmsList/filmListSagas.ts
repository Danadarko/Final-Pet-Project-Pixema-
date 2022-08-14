import { put, call, takeLatest } from "typed-redux-saga";
import { FetchFilmsApi } from "./api";

import { actions } from "./filmListSlice";

export function* filmListSaga() {
  yield takeLatest(actions.getFilmsFetch, function* (action) {
    try {
      const result = yield* call(FetchFilmsApi.fetchAllFilms, action.payload);
      yield* put(
        actions.getFilmsSuccess({
          films: result,
          ...action.payload,
        })
      );
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.getFilmsFailure(e.message));
      }
    }
  });
}
