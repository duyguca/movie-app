import React from "react";
import { Link } from "react-router-dom";

function SubMenu({ movieCategory, setMovieCategory }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setMovieCategory(selectedCategory);
  };
  return (
    <>
      <div className="#0a0b0d text-white flex items-center justify-between px-14 my-10">
        <div>
          {/* <button
            onClick={() => setMovieCategory("popular")}
            className="md:text-base lg:text-lg hover:text-red-500 cursor-pointer md:p-0 md:mr-4 p-2 lg:mr-16"
          >
            Popular
          </button>
          <button
            onClick={() => setMovieCategory("top_rated")}
            className="md:text-base lg:text-lg hover:text-red-500   cursor-pointer md:p-0 md:mr-4  p-2 lg:mr-16"
          >
            Top Rated
          </button>
          <button
            onClick={() => setMovieCategory("now_playing")}
            className="md:text-base lg:text-lg hover:text-red-500   cursor-pointer md:mr-4 lg:mr-16 md:p-0  p-2"
          >
            Now Playing
          </button>
          <button
            onClick={() => setMovieCategory("upcoming")}
            className="md:text-base lg:text-lg hover:text-red-500   cursor-pointer md:mr-4 mr-16 md:p-0 p-2"
          >
            Upcoming
          </button> */}

          <label
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
        </div>
        {/* <input
          className="w-[20%] p-2 py-1 ml-16 rounded"
          placeholder="Search..."
          type="text"
        /> */}
        <Link to="/favourites">
          <button>Go favs</button>
        </Link>
      </div>
    </>
  );
}

export default SubMenu;
