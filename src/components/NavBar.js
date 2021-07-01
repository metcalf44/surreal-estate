import React from "react";
import "../styles/NavBar.css";
import image from "../images/house.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <img className="houseLogo" src={image} alt="a hand holding a house" />
        <h2>Surreal Estate</h2>
        <div className="navbar-links">
          <ul>
            <li className="navbar-link-items" href="#">
              View Properties
            </li>
            <li className="navbar-link-items" href="#">
              Add a Property
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
