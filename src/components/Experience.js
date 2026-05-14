import React, { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import workInfo from "../data/workData.js";
import WorkCard from "./Work.js";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "../styles/Experience.scss";

const Experience = ({darkMode}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section" id="work" ref={sectionRef}>
      <div className="container">
        <div className={
              darkMode?'work-wrapper':'work-wrapper light'
            }>
        <FadeIn bottom cascade>
            <h1 className="gradient">Experience</h1>
          </FadeIn>
          <AliceCarousel
          key={isVisible ? "playing" : "paused"}
          autoPlayInterval={5000}
          infinite
          autoPlay={isVisible}
          >
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