import axios from 'axios';

const API_KEY = '722b0a5af5cd5484e283de2112bebef7';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjJiMGE1YWY1Y2Q1NDg0ZTI4M2RlMjExMmJlYmVmNyIsIm5iZiI6MTcyMzkxNjQ3NS43MjE1MjEsInN1YiI6IjY2YmUxYTVjMzYyMjMyYjZjMjgyOGRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VBq1dsJi7b5_SZu3EeCj6snEwGDIw-hHUTjtr5rZn1s';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
});

const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get('/trending/movie/week');
  return response.data.results;
};

const searchMovies = async (query) => {
  const response = await axiosInstance.get('/search/movie', {
    params: { query, include_adult: false }
  });
  return response.data.results;
};

const fetchMovieDetails = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
};

const fetchMovieCast = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

const fetchMovieReviews = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};

export { fetchTrendingMovies, searchMovies, fetchMovieDetails, fetchMovieCast, fetchMovieReviews };
