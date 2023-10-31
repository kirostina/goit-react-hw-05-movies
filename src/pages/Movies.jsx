import { useSearchParams } from "react-router-dom";
import { useState, useEffect, } from "react";
import { fetchBySearchMovies } from "../components/API";
import  SearchBar  from "../components/SearchBar";
import { MoviesList } from "../components/MoviesList";


const Movies = () => {

  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('query') ?? '');
  const [movies, setMovies] = useState(null);


  const handleSubmit = inputValue => {
    if (inputValue === '') {
      return alert('Введіть дані для пошуку')
    }
    setSearch(inputValue)
  };


  useEffect(() => {
    if (search === '') {
      return
    }
    fetchBySearchMovies(search).then(data => {
      setMovies([...data])
    })
  }, [search]);

  return (
    <main>
      <SearchBar onSubmit={handleSubmit}  />
      <MoviesList movies={movies} />
    </main>
  )
};

export default Movies