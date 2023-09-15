import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { getPopularMovies } from "../api";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

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

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await getPopularMovies();
      console.log({ movies });
      setMovies(movies.results);
    };
    fetchPopularMovies();
  }, []);
  console.log(slider.current);
  return (
    <div className="h-[600px]">
      <Slider {...settings} ref={slider}>
        {movies.slice(0, 5).map((movie, i) => (
          <div key={i} className="w-full h-[400px] relative overflow-hidden">
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
      <div className="text-center">
        <button
          className="text-white p-6"
          onClick={() => {
            slider?.current?.slickNext();
          }}
        >
          <AiOutlineArrowLeft size={35} />
        </button>
        {movies.slice(0, 5).map((_, i) => (
          <button
            className="text-white w-2 h-2 hover:bg-red-600 mb-3 hover:scale-200 cursor-pointer p-1 m-3 text-center bg-white rounded text-xl transition duration-150 ease-out hover:ease-in"
            onClick={() => slider?.current?.slickGoTo(i)}
          ></button>
        ))}
        <button
          className="text-white p-6"
          onClick={() => {
            slider?.current?.slickNext();
          }}
        >
          <AiOutlineArrowRight size={35} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
