import Typical from 'react-typical';
import FadeIn from "react-fade-in/lib/FadeIn";

import '../styles/AboutMe.scss'

function AboutMe() {
  return (
      <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="imageWrapper">
            <FadeIn>
          <img src={"https://media.licdn.com/dms/image/D5603AQE29UirOGl3pw/profile-displayphoto-shrink_800_800/0/1680465738368?e=1686787200&v=beta&t=-2O30SdpBuSSMinrDl5a5zjbR8RJ3qREwmS6cUB1KuA"} className="picture" alt="headShot"/>
          </FadeIn>
          </div>
          <div className="content">
            <FadeIn bottom>
              <h1 className='gradient'> About Me </h1>
            </FadeIn>
            <p>
              Welcome to my personal page! My name is Miruo Lin, and I'm a third-year software engineering student at Western University.
            </p>
            <p>I am super passionate about good design, and I've gained skills in software development through my projects, school, and work experience. You can find all of them on this page!</p>
            <p>I'm interested in building products to make life easier and more fun. Currently, I'm looking for a Fall 2023 Internship!</p>
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
