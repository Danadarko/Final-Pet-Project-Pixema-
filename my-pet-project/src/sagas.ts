import { all } from "redux-saga/effects";
import { filmListSagas } from "./features/films/filmsList";

export function* rootSaga() {
  yield all([filmListSagas()]);
}
