
import { Link, useLocation } from "react-router-dom";
import { MoviesItem } from "./MoviesItem";
import PropTypes from 'prop-types';



export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies && movies.map(({id, title, vote_average, poster_path, release_date }) => (
          <div key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviesItem title={title} poster_path={poster_path} vote_average={vote_average} release_date={release_date} />
            </Link>
        </div>
      ))}
    </div>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};