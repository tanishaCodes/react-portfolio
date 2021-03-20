import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer className='mt-5'>
            <Container className="lead font-weight-light" fluid={true}>
                <Row className='border-top justify-content-center p-3'>
                    <Col xs='6' md='4'>
                        &#169;2020 Made by Tanisha Howell
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;