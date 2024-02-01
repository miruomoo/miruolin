import React from 'react';
import FadeIn from "react-fade-in";
import background from "../assets/Background.mp4"
import "../styles/Header.scss";

const Header = ({darkMode}) => {

  return (
    <div className="section" id="home"
    >
      <div className="container">
        <div className={
          darkMode? 'header-wrapper':'header-wrapper light'
        }>
        <video src={background} autoPlay playsInline loop muted />
          <FadeIn bottom cascade>
            <div className="heading-wrapper">
              <h1>Hello,</h1>
              <h1>I'm Miruo.</h1>
            </div>
            <p>
              Third-year Software Engineering Student at Western University
              <span> 🐎</span>
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