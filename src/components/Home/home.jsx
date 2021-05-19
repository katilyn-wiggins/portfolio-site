import React, { Component } from 'react';
// import Header from './header'
// import intro from '../../components/images/intro.png'
import intro2 from '../../components/images/intro2.png'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import skincode from '../images/skincode.png'
import algorhythm from '../images/algorhythm.png'
import katilyn from '../images/katilyn.jpg'
import ventana from '../images/ventana.png'
import '../app/App.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        {/* <Header /> */}
        {/* logo should go here */}
        <a alt="homepage" id="home" href="#home"><img className="intro" alt="intro that says Katilyn Wiggins, Software Engineer" 
        src={intro2}/></a>

        <div className="links">
          <ul>
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/katilynwiggins"><img className="social" src={linkedin} alt="linkedin"></img></a>
            </li>
            <li>
              <a href="https://github.com/katilyn-wiggins"><img className="social" src={github} alt="github"></img></a>
            </li>
            <li>
              <a href="https://twitter.com/pinkishcreature"><img className="social" src={twitter} alt="twitter"></img></a>
           </li>
         </ul>
        </div>

        <div className="quick-links">
          {/* <a href="#about me">About Me</a> */}
          <a href="#projects">Projects</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#contact">Contact</a>
        </div>

        <h1 id="aboutme">About Me</h1>
        <article>Full Stack Software Engineer passionate about developing tech for everyone. I find joy in systematically evaluating and strategizing creative solutions for life’s little (or big) problems. </article>
                
        <h1 id="projects"className="projects">Projects</h1>
        <h2 className="skincode">SkinCode</h2>
        <img src={skincode} alt="skincode" className="project-photo"></img>
        <div className="links">
        <ul>
          <li>
        <a className="projectlink" href="https://myskincode.netlify.app">Live</a>
        </li>
        <li>
        <a className="projectlink" href="https://github.com/Foundation-App">Code</a>
        </li>
        </ul>
        </div>
        
        <article>An app that challenges the beauty world as we know it by providing accurate and accessible foundation matches for every skin tone. Collaborated remotely with 3 female developers over a week-long sprint. Full stack application that utilizes 3 API's and 2 machine learning models. Personally responsible for developing the final logic behind the foundation prediction algorithm. </article>
        <details><summary>Tech Utilized</summary>React/Node.js/Express/PostgreSQL/Machine Learning Models/REST APIs/Bcrypt/CSS/HTML</details>


        <h2>Algorhythm</h2>
        <img src={algorhythm} alt="algorhythm" className="project-photo"></img>
        <div className="links">
        <ul>
          <li>
            <a className="projectlink" href="https://algo-rhythm.netlify.app">Live</a>
          </li>
          <li>
            <a className="projectlink" href="https://github.com/playshare-app">Code</a>
          </li>
        </ul>
        </div>
       
        <article>A silent disco for developers. Partnered with a team of 3 female developers to navigate the Spotify API and render user playlists, utilized postgreSQL to manage user info, then stylized results with MaterialUI. Spearheaded the UX process by adapting Spotify oAuth to meet product specification to ensure a smooth login process. </article>
        <details><summary>Tech Utilized</summary>React/Node.js/Express/PostgreSQL/Spotify oAuth/CSS/ Material UI/ HTML/REST APIs</details>

        <h2>Ventana</h2>
        <img src={ventana} alt="ventana" className="project-photo"></img>
        <div className="links">
            <ul>
                <li>
                 <a className="projectlink" href="http://travel-site-alchemy.github.io/travel-site/">Live</a>
              </li>
              <li>
                 <a className="projectlink" href="https://github.com/Travel-Site-Alchemy/travel-site">Code</a>
              </li>
            </ul>
        </div>
        <article>A travel site to find off the beaten path adventures. Utilizes local storage and persistent state to simulate a travel website with the ability to save locations. Finalized the render of unique locations by utilizing array methods. </article>
        <details><summary>Tech Utilized</summary>Vanilla JavaScript/HTML/CSS</details>



        <h1 id="tech-stack">Tech Stack</h1>
        <div className="tech-stack">
        <ul>
        <li className="list-header">Languages</li>
        <li>Javascript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        </ul>
        <ul>
        <li className="list-header">Libraries 
          <br/>&amp; FrameWorks</li>
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
        <li>Superagent</li>
        </ul>
        <ul>
        <li className="list-header">Testing</li>
        <li>Jest</li>
        <li>QUnit</li>
        <li>React Testing <br/>Library</li>
        </ul>
        <ul>
        <li className="list-header">Databases</li>
        <li>PostgreSQL</li>
        </ul>
        <ul>
        <li className="list-header">Tools</li>
        <li>AWS</li>
        <li>Github</li>
        <li>Netlify</li>
        <li>Heroku</li>
        <li>PGAdmin</li>
        <li>Postman</li>
        <li>Slack</li>
        <li>VSCode</li>
        </ul>
        <ul>
        <li className="list-header">Practices</li>
        <li>TDD</li>
        <li>Agile Methodolgy</li>
        <li>Pair Programming</li>
        <li>Remote Development</li>
        </ul>
        </div>

        <h1 id="contact">Contact</h1>
        <a className="email" alt="email link" href="mailto:katilynswiggins@gmail.com">katilynswiggins@gmail.com</a>

        <img className="katilyn" alt="katilyn" src={katilyn} />
        

        <a className="back-to-top" alt="top of page" href="#home">Back To Top</a>
      </div>
    );
  }
}
