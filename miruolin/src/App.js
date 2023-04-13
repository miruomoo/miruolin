import './App.scss';
import FadeIn from "react-fade-in/lib/FadeIn";
import Typical from 'react-typical';

function App() {
  return (
      <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
          <img src={"https://media.licdn.com/dms/image/D5603AQE29UirOGl3pw/profile-displayphoto-shrink_800_800/0/1680465738368?e=1686787200&v=beta&t=-2O30SdpBuSSMinrDl5a5zjbR8RJ3qREwmS6cUB1KuA"} className="picture"/>
            <FadeIn bottom>
              <h1 className='gradient'> About Me </h1>
            </FadeIn>
            <p>
              Hey, I'm Miruo Lin, a third-year software engineering student at Western University.
            </p>
            <p>I love{" "}
              <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "learning 📚",
                2000,
                "video games 👾",
                2000,
                "creating ✏️",
                2000,
                "cars 🚗",
                2000,
                "challenges 🏁",
                2000,
                "building 🛠️",
                2000,
                "coding 💻"
              ]}
              ></Typical>

            </p>
            <p>sorry!</p>
            <p>Site currently under construction :)</p>{" "}
          </div>
          <div className="image-wrapper">
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
