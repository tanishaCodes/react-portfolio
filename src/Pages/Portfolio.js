import React from 'react';

import TitlePortfolio from '../components/TitlePortfolio';
import Carousel from '../components/Carousel'

const Portfolio = () => (
  <>
    <section className='level'>
      <div className='level-item has-text-centered'>
        <TitlePortfolio />
        <Carousel />
      </div>
    </section>
  </>
);

export default Portfolio;