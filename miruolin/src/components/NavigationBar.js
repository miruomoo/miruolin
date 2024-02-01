import React from "react";
import * as Scroll from "react-scroll";
import FadeIn from 'react-fade-in';
import "../index.css";

import "../styles/NavigationBar.scss";

let Link = Scroll.Link;

const NavigationBar = ({ darkMode, setDarkMode }) => {

  function handleSetDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className="section">
      <div className="container">
        <FadeIn transitionDuration="1200">
          <div className={
            darkMode? 'navbar-wrapper':'navbar-wrapper light'
          }>
            <div role="button" className="mode" tabIndex={0}>
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
              <button>
                <Link to="projects" spy={true} smooth={true}>
                  Projects
                </Link>
              </button>
              <button>
                <Link to="work" spy={true} smooth={true}>
                  Experience
                </Link>
              </button>
              <button>
                <Link to="contact" spy={true} smooth={true}>
                  Contact
                </Link>
              </button>
              {darkMode&&<button onClick={handleSetDarkMode}>Light Mode
              </button>}
              {!darkMode&&<button onClick={handleSetDarkMode}>Dark Mode
              </button>}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default NavigationBar;