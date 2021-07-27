import React from 'react';
import '../../app/App.css'

const TechStack = () => ( 
     <div className="tech-container">
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

        </div>
    );

export default TechStack; 
