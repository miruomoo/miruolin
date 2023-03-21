import './App.scss';
import FadeIn from "react-fade-in/lib/FadeIn";

function App() {
  return (
      <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <FadeIn bottom>
              <h1> About Me </h1>
            </FadeIn>
            <p>
              Hey, I'm Miruo Lin, a third-year software engineering student at Western University.
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
