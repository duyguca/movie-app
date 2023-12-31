import React from "react";
import Search from "./Search";

function SubMenu({ movieCategory, setMovieCategory, setFilteredMovies }) {
  return (
    <div className="flex justify-between items-center px-4 md:px-8 lg:px-14">
      <div className="w-[600px] flex gap-8 md:gap-16 flex-wrap">
        <div className="relative group w-max">
          <button
            onClick={() => setMovieCategory("popular")}
            className={`block text-white text-lg group-hover:border-b-red-700 m-auto`}
          >
            Popular
          </button>

          <span
            className={`inline-block w-0 h-[1px]  bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out ${
              movieCategory === "popular" ? "w-full" : null
            }`}
          ></span>
        </div>
        <div className="relative group w-max">
          <button
            onClick={() => setMovieCategory("top_rated")}
            className={`block text-white text-lg group-hover:border-b-red-700 m-auto`}
          >
            Top Rated
          </button>

          <span
            className={`inline-block w-0 h-[1px]  bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out ${
              movieCategory === "top_rated" ? "w-full" : null
            }`}
          ></span>
        </div>
        <div className="relative group w-max">
          <button
            onClick={() => setMovieCategory("now_playing")}
            className={`block text-white text-lg group-hover:border-b-red-700 m-auto`}
          >
            Now Playing
          </button>

          <span
            className={`inline-block w-0 h-[1px]  bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out ${
              movieCategory === "now_playing" ? "w-full" : null
            }`}
          ></span>
        </div>
        <div className="relative group w-max">
          <button
            onClick={() => setMovieCategory("upcoming")}
            className={`block text-white text-lg group-hover:border-b-red-700 m-auto`}
          >
            Upcoming
          </button>

          <span
            className={`inline-block w-0 h-[1px]  bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out ${
              movieCategory === "upcoming" ? "w-full" : null
            }`}
          ></span>
        </div>
      </div>

      <div>
        <Search setFilteredMovies={setFilteredMovies} />
      </div>
    </div>
  );
}

export default SubMenu;
