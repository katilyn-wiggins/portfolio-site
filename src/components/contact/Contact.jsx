import React from 'react';
import katilyn from '../images/katilyn.jpg'
import '../app/App.css'

const Contact = () => (  
    <>
        <h1 id="contact">Contact</h1>
        <a className="email" alt="email link" href="mailto:katilynswiggins@gmail.com">katilynswiggins@gmail.com</a>
        <img className="katilyn" alt="katilyn" src={katilyn} />
    </>
    );

export default Contact; 