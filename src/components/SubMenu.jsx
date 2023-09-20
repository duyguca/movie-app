import React from "react";
import { Link } from "react-router-dom";

function SubMenu({ movieCategory, setMovieCategory }) {
  console.log(movieCategory);
  return (
    <>
      <div className="#0a0b0d text-white  px-14 my-10">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
          <button
            onClick={() => setMovieCategory("popular")}
            className={`sm:text-xs md:text-base lg:text-lg hover:border-b-2 border-red-700  cursor-pointer  sm:mr-16 ${
              movieCategory === "popular" ? "border-b-2 border-red-700" : null
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => setMovieCategory("top_rated")}
            className={`sm:text-xs md:text-base lg:text-lg hover:border-b-2 border-red-700  cursor-pointer  sm:mr-16 ${
              movieCategory === "top_rated" ? "border-b-2 border-red-700" : null
            }`}
          >
            Top Rated
          </button>
          <button
            onClick={() => setMovieCategory("now_playing")}
            className={`sm:text-xs md:text-base lg:text-lg hover:border-b-2 border-red-700  cursor-pointer  sm:mr-16 ${
              movieCategory === "now_playing"
                ? "border-b-2 border-red-700"
                : null
            }`}
          >
            Now Playing
          </button>
          <button
            onClick={() => setMovieCategory("upcoming")}
            className={`sm:text-xs md:text-base lg:text-lg hover:border-b-2 border-red-700  cursor-pointer  sm:mr-16 ${
              movieCategory === "upcoming" ? "border-b-2 border-red-700" : null
            }`}
          >
            Upcoming
          </button>

          {/* <label
            className="text- md:text-xl lg:text-2xl mr-6 "
            htmlFor="movie-category"
          >
            Movie Category :
          </label>

          <select
            className="text-black px-4 py-2 rounded text-center"
            id="movie-category"
            value={movieCategory}
            onChange={handleCategoryChange}
            placeholder="Popular"
          >
            <option value="top_rated">Now Playing</option>
            <option value="popular"> Popular</option>
            <option value="now_playing">Top Rated</option>
            <option value="upcoming">Up coming</option>
          </select>
        </div> */}
          {/* <input
          className="w-[20%] p-2 py-1 ml-16 rounded"
          placeholder="Search..."
          type="text"
        /> */}
          <Link to="/favourites">
            <button>Go favs</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SubMenu;
