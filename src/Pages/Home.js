import React from 'react'

import '../index.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/hero.js'
import HomeButton from '../components/HomeButton.js'

function Home(props) {
    return(   
     <>
      <Hero />
      <Jumbotron className="bg-transparent jumbotron-fluid">
            <Container fluid="sm">
                <Row className="justify-content-center">
                    <Col>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light center">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <HomeButton />      
    </>
   );
}

export default Home;