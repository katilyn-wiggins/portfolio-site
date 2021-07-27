import React from 'react'; 
import resume from '../../components/images/resume.pdf'
import '../../app/App.css';



const Header = () => {
  
  return (
  // <div className="header-container">

  <header className="header-container">
    {/* <div> */}
      <nav className="header-nav">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tech-stack">Tech Stack</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a target="_blank" rel="noreferrer" href={resume}>Resume</a></li>
        </ul>
      </nav>
    {/* </div> */}
  </header>
  // </div>
)}

export default Header; 