import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import MyPhoto from '../assets/images/myPhoto.jpg'

function Content(props) {
    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col className="lead font-weight-normal" md={4} xs={6}>
                    {/* Renders and wraps what you want to pass through inside of the page */}
                    {props.children}
                </Col>     
                <Col md={4} xs={6}>
                <Image className='myPhoto' src={MyPhoto} alt='Image of Tanisha' rounded />
                </Col>
            </Row>
        </Container>
    );
}

export default Content;
