import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}/${encodeURIComponent(movie.title)}`}>
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default MovieList;
