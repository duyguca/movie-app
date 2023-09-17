import React from "react";
import FilteredMovies from "./FilteredMovies";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Hero />
      <FilteredMovies />
    </div>
  );
}

export default Home;
