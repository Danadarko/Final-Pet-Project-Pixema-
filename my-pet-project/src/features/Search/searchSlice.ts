import { createSlice } from "@reduxjs/toolkit";
import { Film } from "../../types/film";

import { SearchPayload } from "./types";

const searchSlice = createSlice({
  name: "search",
  initialState: { response: null, isSearchFetching: false, text: "" } as {
    response: Film[] | null;
    isSearchFetching: boolean;
    text: string;
  },
  reducers: {
    search(state, action: { payload: SearchPayload }) {
      state.isSearchFetching = true;
      state.text = action.payload.text;
    },
    searchSuccess(state, action: { payload: Film[] }) {
      state.response = action.payload;
      state.isSearchFetching = false;
      state.text = "";
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
