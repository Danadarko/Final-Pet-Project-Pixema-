import { actions } from "./filmListSlice";
import { all } from "redux-saga/effects";
import { filmListSaga } from "./filmListSagas";

export { default } from "./filmListSlice";

export const { getFilmsFetch, getFilmsSuccess, getFilmsFailure } = actions;

export function* filmListSagas() {
  yield all([filmListSaga()]);
}
