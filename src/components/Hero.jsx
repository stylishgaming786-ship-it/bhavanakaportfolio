import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Bhavana Ka</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="hero-description">
            I craft elegant solutions to complex problems, transforming ideas into exceptional digital experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
