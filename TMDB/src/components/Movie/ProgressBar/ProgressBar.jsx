import "./ProgressBar.css";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const rating = Math.round(props.vote * 10);
  const progressOffset = circumference - (rating / 100) * circumference;

  const barColor = {
    green: "#21d07a",
    yellow: "#d2d531",
    red: "#db2360",
    none: "#d4d4d4",
  };

  const trackColor = {
    green: "#204529",
    yellow: "#423d0f",
    red: "#571435",
    none: "#666666",
  };

  const checkColor = (rating) => {
    if (rating >= 70) return "green";
    if (rating >= 40) return "yellow";
    if (rating < 40) return "red";
    return "none";
  };

  return (
    <div className="custom-progress d-flex align-items-center justify-content-center">
      <svg className="custom-svg">
        <circle
          cx="17"
          cy="17"
          r={radius}
          fill="transparent"
          stroke={trackColor[checkColor(rating)]}
          strokeWidth="4"
          strokeDasharray={circumference}
        />
        <circle
          cx="17"
          cy="17"
          r={radius}
          fill="transparent"
          stroke={barColor[checkColor(rating)]}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
        />
      </svg>
      <div className="percent text-white position-absolute">
        {rating !== undefined ? `${rating}` : "NR"}
        <span className="position-absolute text-white custom-span">%</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  vote: PropTypes.number.isRequired,
};

export default ProgressBar;
