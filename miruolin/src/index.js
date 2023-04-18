import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Sections from './components/Sections';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

ReactDOM.render(
  <React.StrictMode>
    <Sections>
      <Header></Header>
      <AboutMe></AboutMe>
    </Sections>
  </React.StrictMode>,
  document.getElementById("root")
);
