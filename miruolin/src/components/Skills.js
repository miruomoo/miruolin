import "../styles/Skills.scss"
import FadeIn from "react-fade-in/lib/FadeIn";

const Skills=() => {
    return (
        <div className="section" id="skills">
        <div className="container">
          <div className="skills-container">
            <FadeIn bottom cascade>
              <h1 className="gradient">Skills</h1>
              <h3>Languages:</h3>
              <h3>Frameworks:</h3>
              <h3>Developer Tools:</h3>
              <p>Site currently under construction!</p>
              <br></br>
              <br></br>
            </FadeIn>
          </div>
        </div>
      </div>
    )
}

export default Skills;