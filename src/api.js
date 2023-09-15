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
  const response = await AxiosClient.get(
    "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  return response.data;
};
