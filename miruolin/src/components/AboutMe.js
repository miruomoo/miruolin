import Typical from 'react-typical';
import FadeIn from "react-fade-in/lib/FadeIn";

import '../styles/AboutMe.scss'

function AboutMe() {
  return (
      <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="imageWrapper">
          <img src={"https://media.licdn.com/dms/image/D5603AQE29UirOGl3pw/profile-displayphoto-shrink_800_800/0/1680465738368?e=1686787200&v=beta&t=-2O30SdpBuSSMinrDl5a5zjbR8RJ3qREwmS6cUB1KuA"} className="picture" alt="Headshot"/>
          </div>
          <div className="content">
            <FadeIn bottom>
              <h1 className='gradient'> About Me </h1>
            </FadeIn>
            <p>
              I'm Miruo Lin, a third-year software engineering student at Western University.
            </p>
            <p>Here you will find my skills, projects, and experience. I'm passionate about front-end development, design, and creating cool stuff. Currently, I'm looking for a Summer 2023 Internship!</p>
            <p>I also love {" "}<Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "video games 👾",
                1000,
                "drawing ✏️",
                1000,
                "cars 🚗",
                1000,
                "challenges 🏁",
                1000,
                "learning 📚",
                1000,
                "music 🎵"
              ]}
              ></Typical></p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default AboutMe;
