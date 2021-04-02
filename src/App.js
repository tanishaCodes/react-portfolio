import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './components/footer'
import Logo from './assets/images/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tanisha Howell',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: '',
        subTitle: 'Hello! Welcome to my site.',
        text: ''
      },
    }
  }

render() {
  return (
    <Router>
      <Container className='p-0' fluid={true}>
        <Navbar className='color-nav' collapseOnSelect expand='lg' variant='light' sticky='top'>
          <Navbar.Brand href='/'>
           <img className='logo' src={Logo} alt='logo' width={175} height={100} />
          </Navbar.Brand> 

          <Navbar.Toggle className='border-0' aria-controls='responsive-navbar-nav' />

          <Navbar.Collapse id='responsive-navbar-nav'>

          <Nav className='ml-auto font-weight-bolder' as='ul'>
            <Nav.Item as='li'>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Switch>
          <Route path='/' exact render={() => 
            <Home 
              title={this.state.home.title}
              subTitle={this.state.home.subTitle}
              text={this.state.home.text}
            />} />
          <Route path='/about' exact render={() => 
             <About />} />
          <Route path='/portfolio' exact render={() =>            
          <Portfolio />} />
          <Route path='/contact' exact render={() =>            
            <Contact />} />
        </Switch> 
      </Container>
      <Footer />
    </Router>

    );
  }
}

export default App;
