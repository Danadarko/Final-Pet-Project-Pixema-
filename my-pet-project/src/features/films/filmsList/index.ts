import { actions } from "./filmListSlice";
import { all } from "redux-saga/effects";
import { filmListSaga, trendedFilmListSaga } from "./filmListSagas";

export { default } from "./filmListSlice";

export const {
  getFilmsFetch,
  getFilmsSuccess,
  getFilmsFailure,
  getTrendedFilmsFetch,
  getTrendedFilmsSuccess,
  getTrendedFilmsFailure,
} = actions;

export function* filmListSagas() {
  yield all([filmListSaga(), trendedFilmListSaga()]);
}
