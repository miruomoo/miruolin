import "../styles/Projects.scss"
import FadeIn from "react-fade-in/lib/FadeIn";
import Project from "./Project";
import data from "../data/projectsData.js";

const Projects=({darkMode}) => {
    return (
        <div className="section" id="projects">
        <div className="container">
          <div className="project-container">
           <h1 className={
            darkMode?'gradient':'gradient light'
           }>Projects</h1>
           <div className="project-grid">
            {data.projects.map((project, index) => (
              <div className="project" key={index}>
                <FadeIn bottom cascade>
                <Project
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imagePic={project.image}
                  urlLink={project.url}
                  websiteLink={project.website}
                ></Project>
                </FadeIn>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    )
}

export default Projects;