import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

//* showLink - hide button, to reuse in other parts of the code
const MovieCard = ({ movie, showLink = true, isSpotlight = false }) => {
  return (
    <div className="movie-card">
      {movie.poster_path ? <img src={imagesURL + movie.poster_path} /> : <img src='/wimg3.png' alt={movie.title} />}

      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  );
};

export default MovieCard;