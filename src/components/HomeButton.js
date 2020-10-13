import React from 'react';
import '../index.css';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Button = styled.button`
    background-color: #8c52ff;
    color: #d5ed15;
    font-size: 17px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer
    `;

function HomeButton() {
    return(
     <>
        <Container fluid={true}>
            <Row className="home-btn justify-content-center">
                <a href="/about" md={7} size="lg">
                    <Button> Enter </Button>{' '}
                </a>
            </Row>
        </Container>
     </>
    );
}

export default HomeButton;


