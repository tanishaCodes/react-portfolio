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
    }
  }

render() {
  return (
    <Router>
      <Container className='p-0' fluid={true}>
        <Navbar className='color-nav' collapseOnSelect expand='lg' variant='light' sticky='top'>
          <Navbar.Brand href='/'>
           <img className='logo' src={Logo} alt='logo' width={175} height={175} />
          </Navbar.Brand> 

          <Navbar.Toggle className='border-0' aria-controls='responsive-navbar-nav' />

          <Navbar.Collapse id='responsive-navbar-nav'>

            <Nav className='ml-auto font-weight-bolder'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route> 
        <Route path='/about'>
          <About />
        </Route>    
        <Route path='/portfolio'>    
          <Portfolio />
        </Route>   
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
       <Footer />
      </Container>
    </Router>
    );
  }
}

export default App;
