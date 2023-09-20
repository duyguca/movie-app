import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem("favorites")) ?? [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const { movie } = action.payload;
      state.favoriteList.push(action.payload.movie);

      localStorage.setItem("favorites", JSON.stringify(state.favoriteList));
    },
    removeFavorite: (state, action) => {
      const { movie } = action.payload;
      const filteredMovies = state.favoriteList.filter(
        (movieItem) => movieItem.id != movie.id
      );
      state.favoriteList = filteredMovies;

      localStorage.setItem("favorites", JSON.stringify(filteredMovies));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
