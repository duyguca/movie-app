import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../api";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

function SinglePage() {
  const { movieId } = useParams();
  //   console.log(movieId);

  const [currentMovie, setCurrentMovie] = useState(null);
  useEffect(() => {
    const fetchSingleMovie = async () => {
      //   console.log("ssk2", movieId);
      const movie = await getMovieDetails(movieId);
      setCurrentMovie(movie);
    };
    fetchSingleMovie();
    // console.log("ssk", movieId);
  }, []);
  console.log(currentMovie?.genres);
  return (
    <>
      <div className="w-full h-full ">
        <img
          className="w-full h-[450px] object-cover "
          src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
          alt={currentMovie?.title}
        />
      </div>

      <div className="text-white  mx-auto max-w-[75rem] my-16">
        <div className="flex items-center justify-center">
          <div>
            <img
              className="max-w-[300px] object-fill "
              src={`https://image.tmdb.org/t/p/original/${currentMovie?.poster_path}`}
              alt={currentMovie?.title}
            />
          </div>
          <div className="px-14 max-w-[500px]">
            <h1 className="text-4xl py-12 ">{currentMovie?.original_title}</h1>
            <p className="font-light text-sm">{currentMovie?.overview}</p>
            <span className="text-xs block py-4 font-bold">
              Release Date: {currentMovie?.release_date}
            </span>
            <span className="text-xs block font-bold">
              Run Time: {currentMovie?.runtime} min
            </span>
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
            <button>
              <FaRegHeart className=" text-white mr-6 my-6" size={40} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
