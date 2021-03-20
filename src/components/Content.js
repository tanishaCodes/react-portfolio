import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import MyPhoto from '../assets/images/myPhoto.jpg'

function Content(props) {
    return(
        <Container fluid={true}>
            <Row className='justify-content-center'>
                <Col className='lead font-weight-normal' md={{ span: 4, offset: 0 }}>
                    {/* Renders and wraps what you want to pass through inside of the page */}
                    {props.children}
                </Col>     
                <Col className='col-auto'>
                <Image className='myPhoto' src={MyPhoto} alt='Image of Tanisha' roundedCircle />
                </Col>
            </Row>
        </Container>
    );
} 
// col-md-4 col-xs-6

export default Content;
