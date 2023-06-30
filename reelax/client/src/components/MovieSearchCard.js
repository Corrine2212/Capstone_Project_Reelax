import { Link } from 'react-router-dom';

const MovieSearchCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster}`} alt={movie.title} />
      </Link>
    </div>
  )
}

export default MovieSearchCard;
