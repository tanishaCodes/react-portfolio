import React from 'react';

import Image from 'react-bootstrap/Image';

import CardInfo from '../components/CardInfo';

function Card(props) {
    return(
        // Handles the 'handleCardClick' event for the Card written on Carousel
         <div className='d-inline-block folio-style' onClick={(e) => props.onClick(props.item)}>
            <Image className='folio-style-image ' src={props.item.imgSrc} alt={props.item.imgSrc} thumbnail />

            {/* Show title and subtitle only if the card is selected */}
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );
}

export default Card;