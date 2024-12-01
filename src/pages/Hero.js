import React from 'react';

export const Hero = () => {
  return (
    <div className="hero_wrapper">
      <div className="container hero_main">
        <div className="hero_content animate-from-right">
          <h2>Hey</h2>
          <br />
          <h2>
            I'm <span>Arthi A</span>
          </h2>
          <br />
          <h2 className="typing-effect">MERN Stack Developer</h2>
          <br />
          <p>
            I help businesses grow by crafting amazing web experiences. If you’re looking for a developer that likes
            to get stuff done,
          </p>
          <br />
          <h3>Let's Talk</h3>
        </div>
        <div className="hero_img animate-from-left">
          <img src="/assets/hero/1 (1).png" alt="Myself" />
        </div>
      </div>
    </div>
  );
};
