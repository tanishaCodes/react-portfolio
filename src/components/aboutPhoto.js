import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import MyPhoto from '../assets/images/myPhoto.jpg'

function AboutPhoto(props) {
     return(
      <Container className='photoPosition' fluid={true}> 
            <Image className='myPhoto' src={MyPhoto} alt='Image of Tanisha' rounded />
      </Container>
    );
}

export default AboutPhoto;