import React from 'react';

import TitleAbout from '../components/TitleAbout';
import Content from '../components/Content';

function About(props) { 

  return(
    <section className='level'>
     
      <TitleAbout />
    
      <Content>
        <p>
          Hello! My name is Tanisha Howell. I'm a Full Stack Web Developer with experience in MongoDB, Express.js, React, and Node.js or MERN Stack. I also have experience with HTML, CSS, Javascript, jQuery, MySql, Firebase, and APIs.
        </p>

        <p>
          I currently work as a Case Manager in the Social Work field and will transition into the tech field completely. As a May 2020 graduate of UT Austin Coding Bootcamp, I enjoy creating applications in React and I continue to polish and grow my skills by completing projects.
        </p>

        <p>
          If you would like to take a look at my latest projects, you can visit my portfolio and my <a href='https://github.com/tanishaCodes' rel='noopener noreferrer' target='_blank'>GitHub</a> pages.
        </p>

        <p>
          In my spare time, I enjoy painting, hiking and playing with my tuxedo-cat Luna. I would love to connect with you, so please reach out to me via my contact page. Talk soon!
        </p>


      </Content>
    
    </section>
 );
}

export default About;