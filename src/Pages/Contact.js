

import React from 'react';

import { init } from 'emailjs-com';

import styled from 'styled-components';
import '../index.css'

import TitleContact from '../components/TitleContact';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

require('dotenv').config();

const Button = styled.button`
    background-color: #8c52ff;
    color: #d5ed15;
    font-size: 17px;
    height: 50px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer
    `;

init("user_KeP3CDRi7oWaUX8ZxtcyD");

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleSubmit(e) {
      e.preventDefault();
  // eslint-disable-next-line
        const { name, email, message } = this.state
  // eslint-disable-next-line
        let templateParams = {
            from_name: email,
            to_name:'thowell.dev@gmail.com',
            message_html: message
        }

        window.emailjs.sendForm(
          'service_v8cfc6h', 
          'template_8aphey3', 
          e.target, 
          'user_KeP3CDRi7oWaUX8ZxtcyD'
          )
        .then((result) => {
            alert('Message Sent');
            console.log(result.text);
        }, (error) => {
            alert('Message Unsent!');
            console.log(error.text);
        });
        
          this.resetForm()
      }

            resetForm() {
              this.setState({
                  name: '',
                  email: '',
                  message: ''
              })
            }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

  
  render() {
    return (
        <section className='level'>
        <div className='level-item has-text-centered'>
            <TitleContact />
    
                <Container fluid={true}>
                    <Row className="justify-content-center formPosition">
                        <Col className="lead font-weight-normal" xs={8} md={8} lg={4}>
                            <Form className='contactForm' onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group>
                               <Form.Label htmlFor="from_name">Full Name</Form.Label>
                                  <Form.Control id="from_name" name="from_name" type="text" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required />
                            </Form.Group>

                            <Form.Group>
                            <Form.Label htmlFor="user_email">Email</Form.Label>   {/* how to get email address to also send */}
                                  <Form.Control id="user_email" name="user_email" type="user_email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="message">Message</Form.Label>
                                  <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} required />
                            </Form.Group>

                              <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                  Send
                              </Button>
    
                    {/* {this.state.emailSent===true && <p className="d-inline success-msg">Message Sent</p>}
                    {this.state.emailSent===false && <p className="d-inline err-msg">Your Message Was Not Sent</p>} */}
                </Form>
    
                <div className='vertical-line d-none d-lg-block'></div>
    
                </Col>
                
                <Col className='icon-box' xs={12} md={10} lg={4}>
                    <a href='https://github.com/tanishaCodes' rel='noopener noreferrer' target='_blank' role='button'>
                        <span className="icon-style">
                            <i className="fab fa-github fa-5x"></i>
                        </span>
                    </a>
    
                    <a href='https://www.linkedin.com/in/tanisha-howell' rel='noopener noreferrer' target='_blank' role='button'>
                        <span className="icon-style">
                            <i className="fab fa-linkedin fa-5x"></i>
                        </span>
                    </a>
                </Col>
                </Row>
            </Container>
            
        </div>

       </section>
    );
  }
}
  export default Contact;