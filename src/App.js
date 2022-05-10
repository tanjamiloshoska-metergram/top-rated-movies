import "./App.css";
import { useState, useEffect } from "react";
import MovieComponent from "./components/MovieComponent";

function App() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_bcc5wqvp")
      .then((response) => response.json())
      .then((data) => setTopMovies(data.items));
  }, []);

  const filterAndSortMovies = (movies) => {
    return movies
      .filter((movie) => movie.year > 2000)
      .sort((a, b) => (a.year > b.year ? -1 : 1));
  };

  const mapMovieList = () => {
    return filterAndSortMovies(topMovies).map((movie) => (
      <MovieComponent
        fullTitle={movie.fullTitle}
        id={movie.id}
        image={movie.image}
        rating={movie.imDbRating}
        year={movie.year}
        key={movie.id}
      />
    ));
  };

  return (
    <div>
      <p>{mapMovieList()}</p>
    </div>
  );
}

export default App;
