import uoft from "../assets/uoft.jpg";
import agi from "../assets/agi.jpg";
import rbc from "../assets/RBC.jpg";

export default {
  jobs: [
    {
      img: rbc,
      company: "Royal Bank of Canada",
      position: "Software Engineer Intern",
      date: "September 2023 - Current",
      para: "Developing web applications for the Impact Analysis team using Angular and Java. Implemented the Emerald Report feature to process over 2000 datasets daily.",
      link: "https://www.rbc.com/",
    },
    {
      img: uoft,
      company: "University of Toronto",
      position: "Software Developer Intern",
      date: "May - August 2022",
      para: "Developed programs for the Engineering Outreach department using Python, Arduino, and C++, for over 500 students.",
      link: "https://www.utoronto.ca/",
    },
    {
      img: agi,
      company: "AGI Studio",
      position: "Frontend Developer Intern",
      date: "May - August 2023",
      para: "Built an internal client tool and public web application using React, increasing leads and inquiries by 30%.",
      link: "https://www.agistudio.ca/",
    }
  ],
};