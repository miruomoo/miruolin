import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import contact from "../data/socialData.js";

import "../styles/Footer.scss";

const Footer = ({darkMode}) => {
  return (
    <div classname="section" id="contact">
      <div className="container">
      <h1 className={
        darkMode?'gradient':'gradient light'
      }>Contact</h1>
        <div className={
          darkMode?'footer-container':'footer-container light'
        }>
          <FadeIn bottom cascade>
            <h2>Let's connect! Hit me up here:</h2>
          </FadeIn>

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