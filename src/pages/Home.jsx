import { fetchTrendMovies } from "../components/API";
import { MoviesList } from "../components/MoviesList";
import { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(data => {
      setMovies([...data]);
    });
  }, []);
  
  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;