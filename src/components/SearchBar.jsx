// import PropTypes from "prop-types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


const SearchBar = ({ onSubmit }) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('quey') ?? '');
 
  
  const onChange = e => setSearch(e.target.value);
  
  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      return
    }
    onSubmit(search);
    setSearchParams({ query: search });
    setSearch('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="search" onChange={onChange} value={search} autoComplete="off" autoFocus placeholder="Search movies"/>
      <button type="submit">Search</button>
    </form>
  )
};


export default SearchBar