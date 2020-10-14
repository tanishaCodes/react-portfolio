import React from 'react';

import TitleAbout from '../components/TitleAbout';
import Content from '../components/Content'


function About(props) { 

  return(
    <section className='level'>
     
      <TitleAbout />

      <Content>
        <p>
          My name is Tanisha Howell. I'm a Full Stack Web Developer with experience in MongoDB, Express.js, React, and Node.js or MERN Stack. I also have hands on experience in HTML, CSS, and Javascript.
        </p>

        <p>
          I currently keep up my skills by creating web applications for friends and family. One day I will establish my own web development firm.
        </p>

        <p>
          As a graduate of UT Austin Coding Bootcamp, I continue my learning in MERN and plan on adding Python and Mobile Application Development to my repertoire.
        </p>

        <p>
          If you would like to take a look at my latest projects, you visit my profile and my <a href='https://github.com/tanishaCodes' rel='noopener noreferrer'>GitHub</a> pages.
        </p>

        <p>
          I would love to connect with you, so please reach out to me through my contact page.
        </p>

        <p>Talk soon!</p>

      </Content>

    </section>





 
 );
}

export default About;