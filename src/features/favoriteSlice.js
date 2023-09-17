import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      console.log({ action });
      state.favoriteList.push(action.payload.movie);
    },
    removeFavorite: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
