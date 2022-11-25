import React, { useRef } from "react";
import "./Header.scss";
import logo from "../img/cube.png";


const Header = () => {
 
  return (
    <div className="Header">
     
      <div className="nav">
        <div className='Contact'>
          <h1>Contact</h1>
        </div>
        <div className="logo">
        <img src={logo}></img>
        </div>
        <div className="featured">
        <h1>Featured</h1> 
        </div>
      </div>
    </div>
  );
};

export default Header;
