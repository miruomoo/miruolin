import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import contact from "../data/socialData.js";

import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div classname="section" id="contact">
      <div className="container">
      <h1 className="gradient">Contact</h1>
        <div className="footer-container">
          <FadeIn bottom cascade>
            <h2>Let's connect! Hit me up here:</h2>
          </FadeIn>

          <a
            className="email-link"
            href={"mailto: mlin282@uwo.ca"}
          >
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
            Thanks for visiting! - Miruo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;