import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaJsSquare, FaArrowLeft } from "react-icons/fa";
import "./styles/navbar.css";
const NavBar = () => {
  return (
    <div id="MainContainer">
      <div className="main-logo">
        <h3 className="Logo">{"<Husnain Shakoor/>"}</h3>
      </div>
      <div id="homepage-sidebar">
        <Link to={"/home"}>
          <li>
            <FaHome />
          </li>
        </Link>
        <Link to={"/services"}>
          <li>
            <FaJsSquare />
          </li>
        </Link>
        <Link to={"/contact"}>
          <li>
            <FaUser />
          </li>
        </Link>
      </div>
      <div className="exit-button">
        <Link to={"/"}>
          <FaArrowLeft />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
