import React from "react";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header ">
      <img
        src={images.sun_ocean}
        alt="header_bg"
        className="app__header-img-sun-ocean"
      />
      <img
        src={images.samurai}
        alt="header_bg"
        className="app__header-img-samurai"
      />
      <div className="app__header-heading">
        <h1>
          CODING
          <br /> ZAMURAI
          <br /> <span>PORTFOLIO</span>
        </h1>

        <div className="app__header-btn">
          <a href="#work">View My Work</a>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home", "parallax");
