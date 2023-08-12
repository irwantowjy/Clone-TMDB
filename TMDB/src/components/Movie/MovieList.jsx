import "./Movie.css";
import MovieCard from "./MovieCard";

function MovieList() {
  return (
    <div className="container-fluid custom-movie col-11">
      <div className="d-flex gap-4 movie-carousel">
        <MovieCard />
      </div>
    </div>
  );
}

export default MovieList;
