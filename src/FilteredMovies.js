import React, { useState, useEffect } from "react";
import SubMenu from "./SubMenu";
import MovieGrid from "./MovieGrid";
import axios from "axios";
import requests from "../Requests";

function FilteredMovies() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieCategory, setMovieCategory] = useState("popular");
  // useEffect(() => {
  //   axios.get(requests[movieCategory]).then((response) => {
  //     setFilteredMovies(response.data.results);
  //     console.log(response.data.results);
  //   });
  // }, [movieCategory]);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await getPopularMovies();
      console.log({ movies });
      setMovies(movies.results);
    };
    fetchPopularMovies();
  }, []);
  console.log(filteredMovies);
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
