import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';

const API_KEY = '722b0a5af5cd5484e283de2112bebef7';

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Перевірте, чи отримуєте правильний параметр
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError('Error fetching movie details');
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchMovieCast = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        setError('Error fetching movie cast');
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieDetails();
    fetchMovieCast();
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading movie details...</p>;
  if (!cast.length) return <p>Loading cast...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <MovieCast cast={cast} />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
