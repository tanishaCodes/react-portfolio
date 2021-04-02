import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyPhoto from '../assets/images/myPhoto.jpg'

function AboutPhoto(props) {
     return(
      <Container fluid={true}> 
       <Row>
        <Col>
            <Image className='myPhoto' src={MyPhoto} alt='Image of Tanisha' roundedCircle />
        </Col>
       </Row>
      </Container>
    );
}

export default AboutPhoto;