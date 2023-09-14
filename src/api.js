import axios from "axios";
const AxiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/",
  timeout: 8000,
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmVhYzQyYzk3M2IzM2QzMDc5ZjliMjRjMjhiMTAwNyIsInN1YiI6IjY0ZWZiY2MyOTdhNGU2MDBlMWEyNWY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqrJASIQd_qkONIJBi_UXtjZScmvrhL78oH3P4r6q-0",
  },
});
// API Call
export const getPopularMovies = async () => {
  const response = await AxiosClient.get(
    "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  return response.data;
};
