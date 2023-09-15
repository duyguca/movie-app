import React, { useState } from "react";

function MovieGrid({ filteredMovies }) {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const handleMouseEnter = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {filteredMovies.map((movie, i) => (
        <div
          className="p-2"
          key={i}
          onMouseEnter={() => handleMouseEnter(movie)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
          />
          {hoveredMovie === movie && (
            <div className="movie-details">
              <h2>{movie.title}</h2>
              {/* Display other movie details here */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
