import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Adicione um estado para o carregamento
  const [error, setError] = useState(null); // Adicione um estado para erros

  const getTopRatedMovies = async (url) => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Erro: ${res.status}`);
      }

      const data = await res.json();
      setTopMovies(data.results || []);
    } catch (err) {
      setError("Não foi possível carregar os filmes.");
      console.error("Erro na requisição:", err.message);
    } finally {
      setLoading(false); // Garante que o estado de carregamento seja atualizado
    }
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          !error &&
          topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
