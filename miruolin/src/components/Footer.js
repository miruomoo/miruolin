import React from "react";
import { Fade } from "react-awesome-reveal";
import contact from "../data/socialData.js";
import Aurora from "./Aurora";

import "../styles/Footer.scss";

const Footer = ({darkMode}) => {
  return (
    <div classname="section" id="contact">
      <div className="aurora-wrapper">
        <Aurora
          colorStops={["#3794ff", "#FF94B4", "#bea0c7"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="container">
      <h1 className={
        darkMode?'gradient':'gradient light'
      }>Contact</h1>
        <div className={
          darkMode?'footer-container':'footer-container light'
        }>
          <Fade direction="up" cascade>
            <h2>Let's connect! Hit me up here:</h2>
          </Fade>

          <a
            className="email-link"
            href={"mailto: mlin282@uwo.ca"}
          ><span>📧</span>
            mlin282@uwo.ca
          </a>
          <div className="icons">
            {contact.social.map((socialLink, index) => (
              <div className="social-icons">
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
              </div>
            ))}
          </div>
          <span>
            Made by Miruo with React :)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;