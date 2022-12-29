import React, { useRef, useState, useEffect } from "react";
import "./Landing.scss";
import space from "../img/space.mp4";

function Landing() {
  const [size, setSize] = useState(false);
  

  const transitionScroll = () => {
    if (window.scrollY > 100) {
      setSize(true);
    } else {
      setSize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionScroll);
    return () => {
      window.removeEventListener("scroll", transitionScroll);
    };
  }, []);

  return (
    <div className="Landing">
      <div>
        <h1>Crafting</h1>
      </div>
      <div>
        <h1>Memory</h1>
      </div>
      <div className="brand">
        <h1>brands </h1>
        <p>* With cutting edge technologies</p>
      </div>
      <div className="space">
        <h1>Experience</h1>
        <video
          className={`video ${size && "changeSize"}`}
          type="video/mp4"
          width="420"
          height="420"
          autoPlay
          loop
          src={space}
        ></video>
      </div>
    </div>
  );
}

export default Landing;
