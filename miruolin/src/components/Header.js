import React from "react";
import FadeIn from "react-fade-in";


import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="section" id="home"
    >
      <div className="container">
        <div className="header-wrapper">
          <FadeIn bottom cascade>
            <div className="heading-wrapper">
              <h1 className="gradientBig">Welcome to</h1>
              <h1>Miruo's Portfolio</h1>
            </div>
            <p>
              3rd Year Software Engineering Student at Western University
            </p>
          </FadeIn>
            <a
              className="button"
              href="https://www.linkedin.com/in/miruo-lin/"
            >
              LinkedIn
            </a>
        </div>
      </div>
    </div>
  );
};

export default Header;