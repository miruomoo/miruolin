import React from "react";
import "../styles/Project.scss";
import Tilt from "react-parallax-tilt";

const Project = ({ heading, paragraph, imagePic, urlLink, websiteLink=null }) => {
  return (
    <Tilt
      className="tilt-wrapper"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      tiltReverse={true}
      scale={1.05}
      transitionSpeed={2000}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#bea0c7"
      glarePosition="all"
      glareBorderRadius="20px"
    >
      <div
        className="card"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.5)),url(" +
            imagePic +
            ")",
        }}
      >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={urlLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
        </a>
        {websiteLink && <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{marginLeft: "10px"}}
        >
          View
        </a>}
      </div>
    </div>
    </Tilt>
  );
};

export default Project;