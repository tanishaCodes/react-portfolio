import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer className='mt-5'>
            <Container className='lead font-weight-light' fluid='md'>
                <Row className='border-top justify-content-center p-3'>
                    <Col xs={1} sm={12} md={0} lg={12} />
                        &#169;2020 Made by Tanisha Howell
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;