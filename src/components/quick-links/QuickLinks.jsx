import React from 'react';
import resume from '../images/resume.pdf'
import '../app/App.css'

const QuickLinks = () => ( 
        <div className="quick-links">
          {/* <a href="#about me">About Me</a> */}
          <a href="#projects">Projects</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#contact">Contact</a>
          <a href={resume}>Resume</a>

        </div>
    );

export default QuickLinks; 
