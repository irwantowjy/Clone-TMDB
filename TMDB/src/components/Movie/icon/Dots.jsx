import "./Dots.css";

import PropTypes from "prop-types";

const Dots = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg viewBox="0 0 32 32">
        <path
          xmlns="http://www.w3.org/2000/svg"
          id="circle-more"
          d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4ZM10,18a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,10,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,16,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,22,18Z"
        />
      </svg>
    </div>
  );
};

Dots.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Dots;
