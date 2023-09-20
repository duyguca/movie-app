import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCaRD";

function MovieGrid({ filteredMovies }) {
  const favoriteList = useSelector((state) => state.favorite);

  console.log("favList", favoriteList);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-2 md:px-8 lg:px-14 gap-6 my-10 ">
      {filteredMovies.slice(0, 12).map((movie, i) => (
        <MovieCard key={movie?.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
