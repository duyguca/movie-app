import React from "react";

function SubMenu({ movieCategory, setMovieCategory }) {
  return (
    <>
      <div className="#0a0b0d text-white flex items-center justify-between">
        <div>
          <button
            onClick={() => setMovieCategory("popular")}
            className="text-2xl hover:text-red-700 ml-4  cursor-pointer pl-4 pr-16 py-4"
          >
            Popular
          </button>
          <button
            onClick={() => setMovieCategory("top_rated")}
            className=" text-2xl  hover:text-red-700 cursor-pointer px-8 py-4"
          >
            Top Rated
          </button>
          <button
            onClick={() => setMovieCategory("now_playing")}
            className=" text-white hover:text-red-700 text-2xl cursor-pointer px-16 py-4"
          >
            Now Playing
          </button>
          <button
            onClick={() => setMovieCategory("upcoming")}
            className=" text-white hover:text-red-700 text-2xl cursor-pointer px-16 py-4"
          >
            Upcoming
          </button>
        </div>
        <input
          className="w-[20%] px-2 py-1 ml-16 rounded"
          placeholder="Search..."
          type="text"
        />
      </div>
    </>
  );
}

export default SubMenu;
