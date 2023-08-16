import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar/ProgressBar";
import Dots from "./icon/Dots";
import Trending from "./FetchData/Treding";
import Modal from "./Modal/Modal";

const MovieCard = (props) => {
  const { data } = Trending(props.value);
  const [showCards, setShowCards] = useState(false);
  const [clickedImageId, setClickedImageId] = useState(null);
  const [modalVisible, setmodalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCards(true);
    }, 500);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleOverlay = (id) => {
    if (clickedImageId === id) {
      setClickedImageId(null);
      setmodalVisible(null);
    } else {
      setClickedImageId(id);
    }
  };

  const handleModal = (id) => {
    if (modalVisible === id) {
      setmodalVisible(null);
      setClickedImageId(null);
    } else {
      setmodalVisible(id);
    }
  };
  return (
    <>
      {data.map((item) => (
        <div
          className={`text-black custom-card ${
            showCards ? "custom-card-transition show" : "custom-card-transition"
          }`}
          key={item.id}
        >
          <div className="position-relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="Movie Image"
              style={{ zIndex: -1 }}
            />
            {clickedImageId === item.id && (
              <div
                className="overlay-image"
                onClick={() => handleOverlay(item.id)}
              ></div>
            )}
            <div className="position-absolute custom-bar">
              <ProgressBar vote={item.vote_average} />
            </div>
            <div className="position-absolute custom-icon">
              <Dots
                onClick={() => {
                  handleOverlay(item.id);
                  handleModal(item.id);
                }}
              />
              {modalVisible === item.id && (
                <div
                  onClick={() => handleModal(item.id)}
                  className={`modal ${modalVisible ? "show" : ""}`}
                >
                  <Modal />
                </div>
              )}
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
