import React from 'react';
import '../index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutPhoto from './aboutPhoto';

function Content(props) {
    return(
        <Container fluid={true}>
            <Row className='justify-content-center'>
                <Col className='lead font-weight-normal aboutContent' xs={6} sm={8} md={8} lg={8} xl={4}>
                    {/* Renders and wraps what you want to pass through inside of the page */}
                    {props.children}
                </Col>
                <Col md={8} lg={6} xl={5}>
                    <AboutPhoto />
                </Col>
            </Row>
        </Container>
    );
} 

export default Content;
