import ProgressBar from "../ProgressBar/ProgressBar";
import Dots from "../icon/Dots";
import Trending from "./FetchData/Treding";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const { data } = Trending(props.value);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      {data.map((item) => (
        <div className="text-black custom-card" key={item.id}>
          <div className="position-relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="Movie Image"
            />
            <div className="position-absolute custom-bar">
              <ProgressBar vote={item.vote_average} />
            </div>
            <div className="position-absolute custom-icon">
              <Dots/>
            </div>
          </div>
          <h1 className="custom-movie-title">{item.title}</h1>
          <p>{formatDate(item.release_date)}</p>
        </div>
      ))}
    </>
  );
};

MovieCard.propTypes = {
  value: PropTypes.string.isRequired,
};

export default MovieCard;
