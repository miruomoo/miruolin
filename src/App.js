import React, { useState, useEffect } from 'react';
import './index.css';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import NavigationBar from "./components/NavigationBar";

import "./styles/App.scss";

const App = () => {
    const [darkMode, setDarkMode] = useState(
        () => !window.matchMedia('(prefers-color-scheme: light)').matches
    );

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: light)');
        const handler = (e) => setDarkMode(!e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    useEffect(()  => {
        if (!darkMode){
            document.body.classList.add('light');
        }else{
            document.body.classList.remove('light');
        }
    }, [darkMode]);

    return (
        <>
            <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode}></NavigationBar>
            <Header darkMode={darkMode}></Header>
            <div className="main-content">
                <AboutMe darkMode={darkMode}></AboutMe>
                <Skills darkMode={darkMode}></Skills>
                <Projects darkMode={darkMode}></Projects>
                <Experience darkMode={darkMode}></Experience>
            </div>
            <Footer darkMode={darkMode}></Footer>
        </>
    );
};

export default App;