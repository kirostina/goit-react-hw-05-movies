import PropTypes from "prop-types";


export const MoviesItem = ({ poster_path, title, vote_average,release_date }) => {
  const postImg = 'https://image.tmdb.org/t/p/w500';
  let imgUrl = postImg + poster_path;
  if (poster_path === null) {
    imgUrl = 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg';
  }
  return (
    <>
      <h1>{title} {release_date.slice(0,4)}</h1> 
      <img src={imgUrl} alt={title} />
      <p>Rating: {vote_average}</p>
    </>
 );
};


MoviesItem.propTypes = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
};