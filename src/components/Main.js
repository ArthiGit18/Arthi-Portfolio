import React from 'react';
import { Hero } from '../pages/Hero';
import Navbar from '../pages/Navbar';
import About from '../pages/About';
import Skills from '../pages/Skills';
import { Experience } from '../pages/Experience';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import { Copyright } from '../pages/Copyright';
// import { Fixed } from '../pages/Fixed';

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* <Fixed /> */}
      <hr />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <hr />
      <Copyright />
    </div>
  );
};

export default Main;
