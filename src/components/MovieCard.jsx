import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  return (
    <div className="group relative cursor-pointer ">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie?.title}
      />

      <div className="absolute top-[100%] left-0 right-0 bg-gradient-to-b from-purple-500 to-pink-500 overflow-hidden w-full h-0 transition-all duration-500 group-hover:top-0 group-hover:h-full group-hover:p-4 hover:opacity-90 flex flex-col justify-end">
        <div>
          <h2 className="text-white text-md font-bold">
            {movie?.original_title}
          </h2>
        </div>
        <div>
          <p className="text-white text-sm font-light">
            {truncateString(movie?.overview, 150)}...
          </p>
        </div>
        <Link to={`/movie/${movie.id}`}>
          <a className="border-b-4 border-#1985FF text-sm  text-white border-none ">
            More Info
          </a>
        </Link>
        <button onClick={() => dispatch(addFavorite({ movie }))}>
          <FaRegHeart className="absolute top-2 right-2 text-white" size={40} />
        </button>
      </div>

      {/* <button onClick={() => dispatch(addFavorite({ movie }))}>
        Add favorite
      </button> */}
    </div>
  );
}

export default MovieCard;
