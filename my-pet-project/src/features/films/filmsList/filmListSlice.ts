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
      genres: [],
    },
    trendedFilms: {
      trendedFilms: [],
      trendedIsFetching: false,
      trendedCount: 10,
      trendedYearFrom: "",
      trendedYearTo: "",
      trendedRaitingFrom: "9.0",
      trendedRaitingTo: "10",
      trendedCountry: "",
      trendedGenres: [],
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
      genres: string[];
    };
    trendedFilms: {
      trendedFilms: Film[];
      trendedIsFetching: boolean;
      trendedCount: number;
      trendedYearFrom: string;
      trendedYearTo: string;
      trendedRaitingFrom: string;
      trendedRaitingTo: string;
      trendedCountry: string;
      trendedGenres: string[];
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
          genres: string[];
        };
      }
    ) => {
      state.allFilmsList.isFetching = true;
      state.allFilmsList.genres = action.payload.genres;
    },
    getTrendedFilmsFetch: (
      state,
      action: {
        payload: {
          trendedCount: number;
          text: SortFilmsEnum;
          trendedYearFrom: string;
          trendedYearTo: string;
          trendedRaitingFrom: string;
          trendedRaitingTo: string;
          trendedCountry: string;
          trendedGenres: string[];
        };
      }
    ) => {
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
      action: { payload: { films: Film[]; trendedCount: number } }
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
