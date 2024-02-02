import Typical from 'react-typical';
import FadeIn from "react-fade-in/lib/FadeIn";

import '../styles/AboutMe.scss'

function AboutMe({darkMode}) {
  return (
      <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="imageWrapper">
            <FadeIn>
          <img src={"https://avatars.githubusercontent.com/u/90869506?v=4"} className={
            darkMode?'picture':'picture light'
          } alt="headShot"/>
          </FadeIn>
          </div>
          <div className={
            darkMode?'content':'content light'
          }>
            <FadeIn bottom>
              <h1 className='gradient'> About Me </h1>
            </FadeIn>
            <p>
              Welcome to my personal page! My name is Miruo Lin, and I'm a third-year software engineering student at Western University.
            </p>
            <p>I am super passionate about good design, and I've gained skills in software development through my projects, school, and work experience. You can find all of them on this page.<span>
            😁</span></p>
            <p>I'm interested in building products to make life easier and more fun. Currently, I'm looking for a Summer 2024 Internship!</p>
            <p>I also love {" "}<Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "video games",
                3000,
                "drawing",
                3000,
                "cars",
                3000,
                "film",
                3000,
                "music",
                3000,
                "ramen",
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
