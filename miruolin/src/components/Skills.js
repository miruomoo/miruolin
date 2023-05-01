import "../styles/Skills.scss"
import FadeIn from "react-fade-in/lib/FadeIn";
import skillsdata from "../data/skillsData";

const Skills=() => {
    return (
        <div className="section" id="skills">
        <div className="container">
          <div className="skills-container">
            <FadeIn bottom cascade>
              <h1 className="gradient">Skills</h1>
              <h3>Languages:</h3> 
              <div className="skills-grid">
                {skillsdata.languages.map((skill, index) => (
                <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.name}</p>
               </div>
                 ))}
              </div>
              <h3>Frameworks:</h3>
              <div className="skills-grid">
                {skillsdata.frameworks.map((skill, index) => (
                <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.name}</p>
               </div>
                 ))}
              </div>
              <h3>Developer Tools:</h3>
              <div className="skills-grid">
                {skillsdata.tools.map((skill, index) => (
                <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.name}</p>
               </div>
                 ))}
              </div>
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