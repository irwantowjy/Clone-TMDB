import "./Movie.css";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import Blur from "./../Effect/Blur";

const MovieList = (props) => {
  return (
    <div className="custom-movie position-relative mx-auto">
      <div className="d-flex gap-4 movie-carousel">
        <MovieCard value={props.value} />
        <Blur />
      </div>
    </div>
  );
};

MovieList.propTypes = {
  value: PropTypes.string.isRequired,
};

export default MovieList;
