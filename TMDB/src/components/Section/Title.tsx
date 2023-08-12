import React, { useState, useRef, useLayoutEffect } from "react";

import "./Title.css";

function Title(props: {
  title: string;
  items: string[];
  onToggle: (value: number) => void;
}) {
  const [active, setActive] = useState(false);
  const [getWidth1, setGetWidth1] = useState(0);
  const [getWidth2, setGetWidth2] = useState(0);

  const checkItem1 = useRef<HTMLDivElement | null>(null);
  const checkItem2 = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (checkItem1.current) {
      setGetWidth1(checkItem1.current.offsetWidth);
    }
    if (checkItem2.current) {
      setGetWidth2(checkItem2.current.offsetWidth);
    }
  }, []);

  const handleClick = (value: boolean) => {
    setActive(value);
  };

  const handleToggle = (index: number) => {
    const selectedValue = index;
    props.onToggle(selectedValue);
  };
  
  //index[1] (this week) offsetWidth bug -1px
  // console.log(checkItem2);

  return (
    <section className="container-fluid col-11 py-3 my-2 align-items-center d-flex">
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
}

export default Title;
