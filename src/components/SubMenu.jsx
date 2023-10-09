import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function SubMenu({ movieCategory, setMovieCategory, setFilteredMovies }) {
  return (
    <>
      <div className="#0a0b0d text-white  px-14 my-10">
        <div className="flex flex-col items-center justify-between sm:flex-row sm:justify-start">
          <div className="relative group mr-20 ml-4">
            <button
              onClick={() => setMovieCategory("popular")}
              className={` block mb-1 text-white text-lg  ${
                movieCategory === "popular" ? "border-b-2 border-red-700" : null
              }`}
            >
              Popular
            </button>
            <span
              className={`inline-block w-0 h-[4px] bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out `}
            ></span>
          </div>
          <div className="relative group mr-20">
            <button
              onClick={() => setMovieCategory("top_rated")}
              className={` block mb-1 text-white text-lg ${
                movieCategory === "top_rated"
                  ? "border-b-2 border-red-700"
                  : null
              }`}
            >
              Top Rated
            </button>
            <span
              className={`inline-block w-0 h-[4px] bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out `}
            ></span>
          </div>

          <div className="relative group mr-20">
            <button
              onClick={() => setMovieCategory("now_playing")}
              className={` block mb-1 text-white text-lg  ${
                movieCategory === "now_playing"
                  ? "border-b-2 border-red-700"
                  : null
              }`}
            >
              Now Playing
            </button>
            <span
              className={`inline-block w-0 h-[4px] bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out `}
            ></span>
          </div>
          <div className="relative group mr-20">
            <button
              onClick={() => setMovieCategory("upcoming")}
              className={` block mb-1 text-white text-lg  ${
                movieCategory === "upcoming"
                  ? "border-b-2 border-red-700"
                  : null
              }`}
            >
              Upcoming
            </button>
            <span
              className={`inline-block w-0 h-[4px] bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out `}
            ></span>
          </div>

          <div>
            {" "}
            <Link to="/favourites">
              <button>Go favs</button>
            </Link>
            <Search setFilteredMovies={setFilteredMovies} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubMenu;
