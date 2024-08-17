

const MovieCast = ({ cast }) => (
  <div>
    <h2>Cast</h2>
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default MovieCast;
