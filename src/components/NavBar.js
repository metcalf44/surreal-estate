import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import image from "../images/house.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <img className="house-logo" src={image} alt="a hand holding a house" />
        <h2>Surreal Estate</h2>
        <div className="navbar-links">
          <ul>
            <li className="navbar-link-items">
              <Link className="link-items" to="/">
                View Properties
              </Link>
            </li>
            <li className="navbar-link-items">
              <Link className="link-items" to="/add-property">
                Add a Property
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
