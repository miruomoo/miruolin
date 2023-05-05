import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Sections from './components/Sections';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Sections>
        <Header></Header>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Experience></Experience>
        <Footer></Footer>
    </Sections>
  </React.StrictMode>,
  document.getElementById("root")
);
