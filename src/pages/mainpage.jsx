import React from "react";
import "./styles/mainpage.css"
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNode,
  FaHotjar,
  FaWordpress,
} from "react-icons/fa";
const MainPage = () => {
  return (
        <div id="homepageContent">
          <div className="homepageContainer">
        <div className="homepageContent-Text">
          <h1>Hi,</h1>
          <h1>I'm Husnain &</h1>
          <h1>I'm a Web-Developer</h1>
          <p>Front-End-Development // Back-End // Wordpress</p>
        </div>
        <div className="homepageContent-logos">
          <div>
            <FaReact fontSize={"2.5rem"} color={"#61dafb"} />
            React
          </div>
          <div>
            <FaNode fontSize={"2.5rem"} color={"#026e00"} />
            NodeJs
          </div>
          <div>
            <FaHotjar fontSize={"2.5rem"} color={"#FF3C00"} />
            HotJar
          </div>
          <div>
            <FaWordpress fontSize={"2.5rem"} color={"white"} />
            Wordpress
          </div>
        </div>
        <Link to={"/contact"} className="homepageContent-button">
          <button> CONTACT ME</button>
        </Link>
        </div>
      </div>
  );
};

export default MainPage;
