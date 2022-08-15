import { createSlice } from "@reduxjs/toolkit";

const markedFilmSlice = createSlice({
  name: "markedFilm",
  initialState: {} as Record<string | number, boolean>,
  reducers: {
    setMarkedFilm(
      state,
      { payload }: { payload: { id: string | number; state: boolean } }
    ) {
      state[payload.id] = payload.state;
    },
  },
});

export const { setMarkedFilm } = markedFilmSlice.actions;
export default markedFilmSlice.reducer;
