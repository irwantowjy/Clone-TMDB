import React from "react";
import "./Title.css"
function Title(props: { title: string; items: string[] }) {
  return (
    <section className="py-4 px-5 mx-5 d-flex">
      <h4>{props.title}</h4>
      <div className="d-flex custom-title align-items-center mx-4 px-3 mb-1 position-relative">
        <div className="custom-style">{props.items[0]}</div>
        <div className="custom-style">{props.items[1]}</div>
        <div className="selector position-absolute"></div>
      </div>
    </section>
  );
}

export default Title;
