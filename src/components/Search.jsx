import React, { useState } from "react";
import { getSearchMovie } from "../api";

const Search = ({ setFilteredMovies }) => {
  const [searchKey, setSearchKey] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();

    const movieData = await getSearchMovie(searchKey);
    setFilteredMovies([...movieData.results]);
    setSearchKey("");
  };

  return (
    <div className="hidden md:block ">
      <form onSubmit={searchMovies}>
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          className=" w-[200px] text-sm py-1 px-2 rounded-sm text-black"
          type="text"
          placeholder="Enter a movie..."
          value={searchKey}
        />
      </form>
    </div>
  );
};

export default Search;
