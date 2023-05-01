import React from "react";
import * as Scroll from "react-scroll";
import FadeIn from 'react-fade-in';

import "../styles/NavigationBar.scss";

let Link = Scroll.Link;

const NavigationBar = () => {
  return (
    <div className="section">
      <div className="container">
      <FadeIn transitionDuration="1200">
        <div className="navbar-wrapper">
          <div role="button" className="name" tabIndex={0}>
            Miruo Lin
          </div>
          <div className="links-wrapper">
            <button>
            <Link to="about" spy={true} smooth={true}>
                About Me
            </Link>
            </button>
            <button>
            <Link to="skills" spy={true} smooth={true}>
                Skills
            </Link>
            </button>
          </div>
        </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default NavigationBar;