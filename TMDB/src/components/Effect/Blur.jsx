import { memo } from "react";
import "./Blur.css";

const Blur = memo(() => {
  return <div className="custom-blur"></div>;
});

Blur.displayName = "Blur";
export default Blur;
