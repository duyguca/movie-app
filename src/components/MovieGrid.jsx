import React from "react";
import MovieCard from "./MovieCaRD";

function MovieGrid({ filteredMovies }) {
  console.log({ filteredMovies });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-2 md:px-8 lg:px-14 gap-6 my-10 ">
      {filteredMovies.slice(0, 12).map((movie, i) => (
        <MovieCard key={`${movie?.title}-${i}`} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
