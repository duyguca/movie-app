import React from "react";
import FilteredMovies from "../components/FilteredMovies";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <FilteredMovies />
    </div>
  );
}

export default Home;
