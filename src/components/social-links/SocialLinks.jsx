import React from 'react';
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import '../app/App.css'

const SocialLinks = () => ( 
        <div className="links">
          <ul>
            <li className="linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/katilynwiggins"><img className="social" src={linkedin} alt="linkedin"></img></a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/katilyn-wiggins"><img className="social" src={github} alt="github"></img></a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/pinkishcreature"><img className="social" src={twitter} alt="twitter"></img></a>
           </li>
         </ul>
        </div>
    );

export default SocialLinks; 