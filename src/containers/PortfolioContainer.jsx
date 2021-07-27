import React from 'react';
import About from '../components/about-me/About'
import Projects from '../components/projects/Projects'
import TechStack from '../components/tech-stack/TechStack'
import Contact from '../components/contact/Contact'
import QuickLinks from '../components/quick-links/QuickLinks'
import SocialLinks from '../components/social-links/SocialLinks'
import SocialLinksSmall from '../components/social-links/SocialLinksSmall'
import Header from '../components/about-me/Header';

import intro2 from '../components/images/intro2.png'
import '../app/App.css'
import Video from '../components/video/Video';

const PortfolioContainer = () => (

      <div className="home-page">
        {/* <img id="home" className="intro" alt="intro that says Katilyn Wiggins, Software Engineer" 
        src={intro2}/> */}
        <Video />
        <Header /> 

        {/* <QuickLinks />  */}
        <About />      
        {/* <SocialLinks />  */}

        {/* <Projects />  */}
        {/* <TechStack /> */}
        {/* <Contact /> */}
        {/* <SocialLinksSmall />  */}

        <a className="back-to-top" alt="top of page" href="#home">Back to Top</a>
      </div>
    );

export default PortfolioContainer