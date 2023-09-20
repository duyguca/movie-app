import React, { useState, useEffect } from "react";
import SubMenu from "./SubMenu";
import MovieGrid from "./MovieGrid";
import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpComingMovies,
} from "../api";

const mapApiRequest = {
  popular: getPopularMovies,
  top_rated: getTopRatedMovies,
  now_playing: getNowPlayingMovies,
  upcoming: getUpComingMovies,
};

function FilteredMovies() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieCategory, setMovieCategory] = useState("popular");

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await mapApiRequest[movieCategory]();
      setFilteredMovies(movies.results);
    };
    fetchMovies();
  }, [movieCategory]);

  // console.log({ movieCategory });

  return (
    <div>
      <SubMenu
        movieCategory={movieCategory}
        setMovieCategory={setMovieCategory}
      />
      <MovieGrid filteredMovies={filteredMovies} />
    </div>
  );
}

export default FilteredMovies;
