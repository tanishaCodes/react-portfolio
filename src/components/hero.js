import React from 'react'

import BrightHeader from '../assets/images/brightHeader.png'
import '../index.css';

function Hero(props) {
    return(   
     <div className='container bg-transparent jumbotron-fluid p-0'>
        <img className='header col-12 col-sm-6' src={BrightHeader} alt='header' />
      </div>
   );
}

export default Hero;
