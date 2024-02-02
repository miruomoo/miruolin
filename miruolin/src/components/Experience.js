import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import workInfo from "../data/workData.js";
import WorkCard from "./Work.js";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "../styles/Experience.scss";

const Experience = ({darkMode}) => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className={
              darkMode?'work-wrapper':'work-wrapper light'
            }>
        <FadeIn bottom cascade>
            <h1 className="gradient">Work Experience</h1>
          </FadeIn>
          <AliceCarousel 
          autoPlayInterval={7000}
          infinite
          autoPlay>
            {workInfo.jobs.map((work, index) => (
              <WorkCard
                key={index}
                imagePic={work.img}
                companyName={work.company}
                companyPosition={work.position}
                companyDate={work.date}
                companyLocation={work.location}
                companyDesc={work.para}
                companyLink={work.link}
                darkMode = {darkMode}
              ></WorkCard>
            ))}
            
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default Experience;