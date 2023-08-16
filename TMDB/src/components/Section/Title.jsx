import { useState } from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = (value) => {
    setActive(value);
  };

  const handleToggle = (index) => {
    const selectedValue = index;
    props.onToggle(selectedValue);
  };

  return (
    <section className="py-3 title-container mx-auto align-items-center d-flex">
      <h4>{props.title}</h4>
      <div className="d-flex custom-title mx-4 mb-1 position-relative">
        <div
          onClick={() => {
            handleToggle(0);
            handleClick(false);
          }}
          className={`py-1 px-4 ${active ? "" : "custom-style"}`}
        >
          {props.items[0]}
        </div>
        <div
          onClick={() => {
            handleToggle(1);
            handleClick(true);
          }}
          className={`py-1 px-3 ${active ? "custom-style" : ""}`}
        >
          {props.items[1]}
        </div>
        <div
          className="selector position-absolute"
          style={
            active
              ? {
                  left: "85px",
                  width: "106px",
                }
              : { left: "0px", width: "90px" }
          }
        ></div>
      </div>
    </section>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Title;
