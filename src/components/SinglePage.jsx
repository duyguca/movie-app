import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../api";
import { useParams } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoriteSlice";
import { checkIsFav } from "../utils";

function SinglePage() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state) => state.favorite);
  const [currentMovie, setCurrentMovie] = useState(null);

  const isFav = checkIsFav(favoriteList, currentMovie);

  useEffect(() => {
    const fetchSingleMovie = async () => {
      const movie = await getMovieDetails(movieId);
      setCurrentMovie(movie);
    };
    fetchSingleMovie();
  }, []);

  return (
    <>
      <div className="w-full h-full ">
        <img
          className="w-full h-[450px] object-cover "
          src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
          alt={currentMovie?.title}
        />
      </div>

      <div className="text-white  mx-auto max-w-[75rem] my-16 ">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div>
            <img
              className="hidden md:block max-w-[300px] object-fill "
              src={`https://image.tmdb.org/t/p/original/${currentMovie?.poster_path}`}
              alt={currentMovie?.title}
            />
          </div>
          <div className="px-14 max-w-[500px] relative">
            <h1 className="text-4xl pb-8 ">{currentMovie?.original_title}</h1>
            <p className="font-light text-sm">{currentMovie?.overview}</p>
            <span className="text-xs block py-4 font-bold">
              Release Date: {currentMovie?.release_date}
            </span>
            <span className="text-xs block font-bold">
              Run Time: {currentMovie?.runtime} min
            </span>
            <button
              onClick={() => {
                return isFav
                  ? dispatch(removeFavorite({ movie: currentMovie }))
                  : dispatch(addFavorite({ movie: currentMovie }));
              }}
            >
              <BsSuitHeartFill
                className={`absolute -bottom-12 left-14 ${
                  isFav ? `text-red-800` : `text-white`
                }`}
                size={40}
              />
            </button>
            <div className="">
              <span className="text-xs font-bold">Genres:</span>
              {currentMovie?.genres.map((genre, i) => {
                return (
                  <span className="text-xs block" key={i}>
                    {genre.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
