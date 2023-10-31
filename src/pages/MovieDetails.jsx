// import { PropTypes} from "prop-types";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect,useState,Suspense } from "react";
import { fetchById } from "../components/API";
import { useLocation } from "react-router-dom";
// import PropTypes from 'prop-types';


const MovieDetails = () => {

  const { id } = useParams();
  const postImg = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  
  useEffect(() => {
    fetchById(id).then(data => {
      setMovie(data);
    });
  }, [id]);

 
  
  const { title, poster_path, overview, genres, vote_average,release_date } = movie;

  let imgUrl = postImg + poster_path;
  if (poster_path === null) {
      imgUrl = 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg';
  };

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <img src={imgUrl} alt={title} />
        <div>
          <h1>{title}</h1>
          <h3>Release </h3>{release_date && release_date.slice(0, 4)}
          <h3>Rating</h3>{vote_average && vote_average.toFixed(1)}
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres: </h3>
          {genres && genres.map(gen => gen.name).join(', ')}
        </div>
      </div>
      <div>
        <h3>Aditional iformation</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
     
export default MovieDetails