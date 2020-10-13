import React from 'react'

import ContactImage from '../assets/images/contactImage.png'

function TitleContact(props) {

    return(   
     <>
     <div className='container' >
        <img className='section' src={ContactImage} alt='section' width={300} height={250} />
      </div>
    </>
   );
}

export default TitleContact;