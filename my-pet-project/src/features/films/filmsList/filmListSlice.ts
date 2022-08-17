import { createSlice } from "@reduxjs/toolkit";
import { SortFilmsEnum } from "../../../components/FilteringBar/types";
import { Film } from "../../../types/film";

const filmListSlice = createSlice({
  name: "filmList",
  initialState: {
    allFilmsList: {
      films: [],
      isFetching: false,
      count: 10,
      yearFrom: "",
      yearTo: "",
      raitingFrom: "",
      raitingTo: "",
      country: "",
    },
    trendedFilms: {
      trendedFilms: [],
      trendedIsFetching: false,
      trendedCount: 10,
    },
  } as {
    allFilmsList: {
      films: Film[];
      isFetching: boolean;
      count: number;
      yearFrom: string;
      yearTo: string;
      raitingFrom: string;
      raitingTo: string;
      country: string;
    };
    trendedFilms: {
      trendedFilms: Film[];
      trendedIsFetching: boolean;
      trendedCount: number;
    };
  },
  reducers: {
    fetchNextPage: (state) => {
      state.allFilmsList.count = state.allFilmsList.count + 10;
    },
    fetchTrendedNextPage: (state) => {
      state.trendedFilms.trendedCount = state.trendedFilms.trendedCount + 10;
    },
    getFilmsFetch: (
      state,
      action: {
        payload: {
          count: number;
          text: SortFilmsEnum;
          yearFrom: string;
          yearTo: string;
          raitingFrom: string;
          raitingTo: string;
          country: string;
        };
      }
    ) => {
      state.allFilmsList.isFetching = true;
    },
    getTrendedFilmsFetch: (state, action: { payload: { count: number } }) => {
      state.trendedFilms.trendedIsFetching = true;
    },
    getFilmsSuccess: (
      state,
      action: { payload: { films: Film[]; count: number } }
    ) => {
      //state.films = action.payload.films;
      state.allFilmsList.films = [...action.payload.films];
      state.allFilmsList.isFetching = false;
    },
    getTrendedFilmsSuccess: (
      state,
      action: { payload: { films: Film[]; count: number } }
    ) => {
      //state.films = action.payload.films;
      state.trendedFilms.trendedFilms = [...action.payload.films];
      state.trendedFilms.trendedIsFetching = false;
    },
    getFilmsUpdate: (state, action: { payload: { isFetching: boolean } }) => {
      state.allFilmsList.isFetching = true;
    },
    getFilmsFailure: (state, action: { payload: string }) => {
      state.allFilmsList.isFetching = false;
      console.error("Failed to receive the film list", action.payload);
    },
    getTrendedFilmsFailure: (state, action: { payload: string }) => {
      state.trendedFilms.trendedIsFetching = false;
      console.error("Failed to receive the film list", action.payload);
    },
  },
});

export const { actions } = filmListSlice;
export default filmListSlice.reducer;
