import { all } from "redux-saga/effects";
import { filmListSagas } from "./features/films/filmsList";
import { searchSagas } from "./features/Search";

export function* rootSaga() {
  yield all([filmListSagas(), searchSagas()]);
}
