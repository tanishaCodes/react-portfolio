import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyPhoto from '../assets/images/myPhoto.jpg'

function AboutPhoto(props) {
     return(
      <Container className='photoPosition' fluid={true}> 
       <Row>
        <Col md={4} xs={6}>
            <Image className='myPhoto' src={MyPhoto} alt='Image of Tanisha' rounded />
        </Col>
       </Row>
      </Container>
    );
}

export default AboutPhoto;