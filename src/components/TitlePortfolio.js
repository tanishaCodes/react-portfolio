import React from 'react'

import PortfolioImage from '../assets/images/portfolioImage.png'

function TitlePortfolio(props) {

    return(   
     <>
     <div className='container' >
        <img className='section' src={PortfolioImage} alt='section' width={300} height={250} />
      </div>
    </>
   );
}

export default TitlePortfolio;