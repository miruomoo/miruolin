import React from "react";
import "../styles/Project.scss";

const Project = ({ heading, paragraph, imagePic, urlLink }) => {
  return (
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
      </div>
    </div>
  );
};

export default Project;