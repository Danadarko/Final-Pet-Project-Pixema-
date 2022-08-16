import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import filmListReducer from "../src/features/films/filmsList/filmListSlice";
import markedFilmReducer from "./features/films/markedFilms/markedFilmSlice";
import searchReducer from "./features/Search/searchSlice";
import { rootSaga } from "./sagas";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    filmList: filmListReducer,
    markedFilm: markedFilmReducer,
    search: searchReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
