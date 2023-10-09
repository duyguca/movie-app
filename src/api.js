import axios from "axios";
const AxiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 8000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});

// API Call
export const getPopularMovies = async () => {
  const response = await AxiosClient.get("/movie/popular");
  return response.data;
};

export const getTopRatedMovies = async () => {
  const response = await AxiosClient.get("/movie/top_rated");
  return response.data;
};

export const getNowPlayingMovies = async () => {
  const response = await AxiosClient.get("/movie/now_playing");
  return response.data;
};

export const getUpComingMovies = async () => {
  const response = await AxiosClient.get("/movie/upcoming");
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await AxiosClient.get(`/movie/${movieId}`);
  return response.data;
};

export const getSearchMovie = async (searchKey) => {
  const response = await AxiosClient.get(`/search/movie?query=${searchKey}`);
  return response.data;
};
