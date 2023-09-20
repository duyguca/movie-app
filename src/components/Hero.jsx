import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { getPopularMovies } from "../api";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  cssEase: "linear",
  adaptiveHeight: true,
};

function Hero() {
  const slider = useRef();
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await getPopularMovies();
      setMovies(movies.results);
    };
    fetchPopularMovies();
  }, []);

  const renderSlides = (movies) => {
    return movies?.slice(0, 5).map((movie, i) => (
      <div
        key={movie.id}
        className="w-full h-[400px] cursor-pointer relative overflow-hidden"
      >
        <Link to={`/movie/${movie.id}`}>
          <img
            className="w-full h-full object-cover "
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </Link>
        <div className="w-full h-[400px] bg-black absolute top-0 left-0 opacity-40"></div>
        <h2 className="text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-1000 ">
          {" "}
          {movie.title}
        </h2>
      </div>
    ));
  };

  return (
    <div className="">
      <Slider
        {...settings}
        ref={slider}
        beforeChange={(_, nextSlide) => {
          setCurrentIndex(nextSlide);
        }}
      >
        {renderSlides(movies)}
      </Slider>

      <div className="relative -mt-12 bg-gradient-to-t from-[#0a0b0d] via-[rgba(10,11,13,1)] to-[rgba(10,11,13,0.03)]">
        <div className="flex items-center justify-center">
          <button
            className="text-white p-6"
            onClick={() => {
              slider?.current?.slickNext();
            }}
          >
            <IoIosArrowBack size={35} />
          </button>
          {movies.slice(0, 5).map((_, i) => (
            <button
              className={`bg-bg-primary border border-white-600 w-2 h-2 hover:bg-white mb-3 hover:scale-200 cursor-pointer p-1 m-3 text-center rounded text-xl transition duration-150 ease-out hover:ease-in ${
                currentIndex === i ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => slider?.current?.slickGoTo(i)}
            ></button>
          ))}
          <button
            className="text-white p-6"
            onClick={() => {
              slider?.current?.slickNext();
            }}
          >
            <IoIosArrowForward size={35} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
