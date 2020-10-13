import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    // Will hold the 'react-spring' style
    const style = useSpring({opacity: 1, from: {opacity: 0}});
    return(
        <animated.div className='folio-info-style' style={style}>
            <p className='folio-info-title'>{props.title}</p>
            <p className='folio-info-sub-title'>{props.subTitle}</p>
            <a href={props.link} target='_blank' rel='noopener noreferrer'>View</a>
        </animated.div>
    );

}

export default CardInfo;