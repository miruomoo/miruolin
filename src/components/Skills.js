import "../styles/Skills.scss"
import FadeIn from "react-fade-in/lib/FadeIn";
import skillsdata from "../data/skillsData";

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <h3>{title}</h3>
    <div className="skill-tags">
      {skills.map((skill, i) => (
        <div className="skill-tag" key={i}>
          <img src={skill.img} alt={skill.name} />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = ({ darkMode }) => (
  <div className="section" id="skills">
    <div className="container">
      <div className={`skills-container${darkMode ? "" : " light"}`}>
        <FadeIn bottom cascade>
          <h1 className="gradient">Skills</h1>
          <SkillCategory title="Languages" skills={skillsdata.languages} />
          <SkillCategory title="Frameworks & Libraries" skills={skillsdata.frameworks} />
          <SkillCategory title="Developer Tools" skills={skillsdata.tools} />
        </FadeIn>
      </div>
    </div>
  </div>
);

export default Skills;