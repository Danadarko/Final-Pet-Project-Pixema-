import { createSlice } from "@reduxjs/toolkit";
import { Film } from "../../types/film";

import { SearchPayload } from "./types";

const searchSlice = createSlice({
  name: "search",
  initialState: { response: null, isSearchFetching: false } as {
    response: Film[] | null;
    isSearchFetching: boolean;
  },
  reducers: {
    search(state, action: { payload: SearchPayload }) {
      state.isSearchFetching = true;
    },
    searchSuccess(state, action: { payload: Film[] }) {
      state.response = action.payload;
      state.isSearchFetching = false;
    },
    searchFailure(state, action: { payload: string }) {
      state.isSearchFetching = false;
    },
    reset(state) {
      state.response = null;
    },
  },
});

export const { actions } = searchSlice;
export default searchSlice.reducer;
