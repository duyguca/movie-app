import React from "react";

function SubMenu({ movieCategory, setMovieCategory }) {
  return (
    <>
      <div className="bg-black text-white flex items-center justify-between">
        <div>
          <button
            onClick={() => setMovieCategory("popular")}
            className="text-2xl cursor-pointer pl-4 pr-16 py-4"
          >
            Popular
          </button>
          <button
            onClick={() => setMovieCategory("topRated")}
            className=" text-2xl cursor-pointer px-16 py-4"
          >
            Top Rated
          </button>
          <button
            onClick={() => setMovieCategory("nowPlaying")}
            className=" text-white hover:text-red-500 text-2xl cursor-pointer px-16 py-4"
          >
            Now Playing
          </button>
          <button
            onClick={() => setMovieCategory("upcoming")}
            className=" text-2xl px-16 py-4"
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
