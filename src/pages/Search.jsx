import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from '../components/MovieCard';

import '../components/MoviesGrid.css'

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;



const Search = () => {

  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    console.log(searchWithQueryURL)
    getSearchedMovies(searchWithQueryURL);
  }, [query]);


  return (
    <div className="container">

      {/* query - url parameter */}
      <h2 className="title">
        Results for .: <span className="query-text">{query}</span>
      </h2>

      <div className="movies-container">
        {movies.length ? (movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)) : false}
      </div>
    </div>
  );
}

export default Search;