import { createSlice } from "@reduxjs/toolkit";
import { Film } from "../../../types/film";

const filmListSlice = createSlice({
  name: "filmList",
  initialState: {
    films: [],
    isFetching: false,
    count: 10,
    isLastPage: false,
  } as {
    films: Film[];
    isFetching: boolean;
    count: number;
    isLastPage: boolean;
  },
  reducers: {
    fetchNextPage: (state) => {
      state.count = state.count + 10;
    },
    getFilmsFetch: (state, action: { payload: { count: number } }) => {
      state.isFetching = true;
    },
    getFilmsSuccess: (
      state,
      action: { payload: { films: Film[]; count: number } }
    ) => {
      //state.films = action.payload.films;
      state.films = [...action.payload.films];
      state.isFetching = false;
    },
    getFilmsUpdate: (state, action: { payload: { isFetching: boolean } }) => {
      state.isFetching = true;
    },
    getFilmsFailure: (state, action: { payload: string }) => {
      state.isFetching = false;
      console.error("Failed to receive the film list", action.payload);
    },
  },
});

export const { actions } = filmListSlice;
export default filmListSlice.reducer;
