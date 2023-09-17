import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoriteSlice";
import MovieCard from "./MovieCaRD";

function MovieGrid({ filteredMovies }) {
  const favoriteList = useSelector((state) => state.favorite);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const dispatch = useDispatch();

  console.log(favoriteList);
  console.log("fm", filteredMovies);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 md:px-8 lg:px-14 gap-6 my-10 ">
      {filteredMovies.map((movie, i) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
