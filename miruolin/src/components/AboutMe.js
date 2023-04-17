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
              Hey there! I'm Miruo Lin, a third-year software engineering student at Western University.
            </p>
            <p>Growing up, I've always enjoyed building stuff from Lego to IKEA furniture. I now apply the same passion to create really cool things with software.</p>
            <p>Here you can find my skills, projects, and experience. Currently, I'm lookin for a Summer 2023 Internship!</p>
            <p>I also love {" "}<Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "video games 👾",
                3000,
                "drawing ✏️",
                3000,
                "cars 🚗",
                3000,
                "learning 📚",
                3000,
                "music 🎵",
                3000,
                "ramen 🍜",
                3000
              ]}
              ></Typical></p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default AboutMe;
