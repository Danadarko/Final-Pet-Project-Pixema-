import { actions } from "./searchSlice";
import { all } from "redux-saga/effects";
import { searchSaga } from "./searchSagas";

export { default } from "./searchSlice";

export const { search } = actions;

export function* searchSagas() {
  yield all([searchSaga()]);
}
