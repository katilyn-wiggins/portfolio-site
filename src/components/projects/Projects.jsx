import React from 'react';
import skincode from '../images/skincode.png'
import algorhythm from '../images/algorhythm.png'
import ventana from '../images/ventana.png'
import '../app/App.css'

const Projects = () => ( 
      <>
        <h1 id="projects"className="projects">Projects</h1>
        <h2 className="skincode">SkinCode</h2>
        <a href="https://myskincode.netlify.app">
         <img src={skincode} alt="skincode" className="project-photo"></img>
        </a>
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
        <a href="https://myskincode.netlify.app">
          <img src={algorhythm} alt="algorhythm" className="project-photo"></img>
        </a>
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
        <a href="https://myskincode.netlify.app">
          <img src={ventana} alt="ventana" className="project-photo"></img>
        </a>
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

      </>
    );

    export default Projects; 

