import { useState, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = (props) => {
  const [active, setActive] = useState(false);
  const [getWidth1, setGetWidth1] = useState(0);
  const [getWidth2, setGetWidth2] = useState(0);

  const checkItem1 = useRef(null);
  const checkItem2 = useRef(null);

  useLayoutEffect(() => {
    if (checkItem1.current) {
      setGetWidth1(checkItem1.current.offsetWidth);
    }
    if (checkItem2.current) {
      setGetWidth2(checkItem2.current.offsetWidth);
    }
  }, [checkItem1, checkItem2]);

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
          ref={checkItem1}
          onClick={() => {
            handleToggle(0);
            handleClick(false);
          }}
          className={`py-1 px-4 ${active ? "" : "custom-style"}`}
        >
          {props.items[0]}
        </div>
        <div
          ref={checkItem2}
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
                  left: `${Math.round(getWidth1)}px`,
                  width: `${Math.round(getWidth2)}px`,
                }
              : { left: "0px", width: `${Math.round(getWidth1)}px` }
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
