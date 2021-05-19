import React from 'react';
import About from '../components/about-me/About'
import Projects from '../components/projects/Projects'
import TechStack from '../components/tech-stack/TechStack'
import Contact from '../components/contact/Contact'
import QuickLinks from '../components/quick-links/QuickLinks'
import SocialLinks from '../components/social-links/SocialLinks'
import intro2 from '../components/images/intro2.png'
import '../components/app/App.css'

const PortfolioContainer = () => (

      <div className="home-page">
        <img id="home" className="intro" alt="intro that says Katilyn Wiggins, Software Engineer" 
        src={intro2}/>

        <SocialLinks /> 
        <QuickLinks /> 
        <About />      
        <Projects /> 
        <TechStack />
        <Contact /> 

        <a className="back-to-top" alt="top of page" href="#home">Back to Top</a>
      </div>
    );

export default PortfolioContainer