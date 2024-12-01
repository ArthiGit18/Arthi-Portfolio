import React, { useEffect, useRef, useState } from 'react';
import ScrollImage from '../common/ScrollImage';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentRef = aboutRef.current;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        },
        { threshold: 0.1 }
    );

    if (currentRef) {
        observer.observe(currentRef);
    }

    return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
    };
}, []);

  return (
    <div className="about_wrapper" ref={aboutRef}>
      <div className="container about_main">
        <ScrollImage />
        <div className="about_content">
          <div className={`about_img ${isVisible ? 'animate-img' : ''}`}>
            <img src="/assets/about/Image.png" alt="coding" />
          </div>
          <div className={`about ${isVisible ? 'animate-content' : ''}`}>
            <h2>About Me</h2>
            <p>
              Hello! My name is Arthi, <br />
              and I specialize in web development that utilizes HTML, CSS, JS,
              and REACT, etc. I am a highly motivated individual and eternal
              optimist dedicated to writing clear, concise, robust code that
              works. Striving to never stop learning and improving. When I'm not
              coding, I am writing blogs, reading, or picking up some new
              hands-on art project like photography. I like to have my
              perspective and belief systems challenged so that I see the world
              through new eyes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
