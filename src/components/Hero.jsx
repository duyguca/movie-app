import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getPopularMovies } from "../api";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  adaptiveHeight: true,
};

function Hero() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies?.length)];

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await getPopularMovies();
      console.log({ movies });
      setMovies(movies.results);
    };
    fetchPopularMovies();
  }, [movies]);

  return (
    <div className="h-[600px]">
      <Slider {...settings}>
        {movies.slice(0, 5).map((movie, i) => (
          <div className="w-full h-[400px] relative overflow-hidden">
            <img
              className="w-full h-full object-cover object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="w-full h-[400px] bg-black absolute top-0 left-0 opacity-40"></div>
            <h2 className="text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-1000 ">
              {" "}
              {movie.title}
            </h2>
            {/* <p className="absolute text-xl font-bold bottom-[100px] text-white z-10001 left-0">
              {movie.overview}
            </p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
