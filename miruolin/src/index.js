import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Sections from './components/Sections';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

ReactDOM.render(
  <React.StrictMode>
    <Sections>
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </Sections>
  </React.StrictMode>,
  document.getElementById("root")
);
