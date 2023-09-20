import React, { useState, useEffect } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoriteSlice";
import { checkIsFav } from "../utils";

const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state) => state.favorite);
  const isFavorite = checkIsFav(favoriteList, movie);

  return (
    <div className="group relative">
      <img
        className="group-hover:blur-sm"
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie?.title}
      />

      <div className=" absolute left-0 top-0 bg-gradient-to-b from-black to-grey overflow-hidden w-full opacity-0 transition-all duration-200 ease-in bg-[rgb(0 0 0, .7] h-full flex justify-end flex-col p-6 group-hover:opacity-100 ">
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
          <button className="border-b-4 border-#1985FF text-sm cursir-pointer text-white border-none px-4 py-2 my-3 bg-red-700 ">
            More Info
          </button>
        </Link>
        <button
          onClick={() => {
            isFavorite
              ? dispatch(removeFavorite({ movie }))
              : dispatch(addFavorite({ movie }));
          }}
        >
          <BsSuitHeartFill
            className={`absolute top-2 right-2 ${
              isFavorite ? "text-red-700" : "text-white"
            }`}
            size={40}
          />
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
