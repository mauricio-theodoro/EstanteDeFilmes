import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Erro na API: ${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    setMovies(data.results || []); // Garante que `movies` seja um array
  } catch (error) {
    console.error("Erro ao buscar filmes:", error.message);
    setMovies([]); // Evita valores indefinidos
  }
};

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;