import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoriteSlice";

function MovieGrid({ filteredMovies }) {
  const favoriteList = useSelector((state) => state.favorite);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const dispatch = useDispatch();

  const handleMouseEnter = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };
  console.log(favoriteList);

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

          <div className="movie-details">
            <h2>{movie.title}</h2>
            {/* Display other movie details here */}
          </div>

          <button onClick={() => dispatch(addFavorite({ movie }))}>
            Add favorite
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
