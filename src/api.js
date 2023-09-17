import axios from "axios";
const AxiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/",
  timeout: 8000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});
// API Call
export const getPopularMovies = async () => {
  const response = await AxiosClient.get("/3/movie/popular");
  return response.data;
};

export const getTopRatedMovies = async () => {
  const response = await AxiosClient.get("/3/movie/top_rated");
  return response.data;
};

export const getNowPlayingMovies = async () => {
  const response = await AxiosClient.get("/3/movie/now_playing");
  return response.data;
};

export const getUpComingMovies = async () => {
  const response = await AxiosClient.get("/3/movie/upcoming");
  return response.data;
};
export const getMovieDetails = async (movieId) => {
  const response = await AxiosClient.get(`/3/movie/${movieId}`);
  return response.data;
};
