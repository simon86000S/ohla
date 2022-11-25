import React, { useRef } from "react";
import "./Landing.scss";
import space from "../img/space.mp4";

function Landing() {
 
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
