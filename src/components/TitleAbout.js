import React from 'react';

import AboutImage from '../assets/images/aboutImage.png'

function TitleAbout(props) {
    return(   
     <>
     <div className='container' >
        <img className='section' src={AboutImage} alt='section' width={300} height={250} />
      </div>
    </>
   );
}

export default TitleAbout;