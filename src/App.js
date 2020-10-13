import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Switch from 'react-bootstrap/Switch';

import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './components/footer'
import Logo from './assets/images/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';

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

      about: {
        title: 'About'
      },

      portfolio: {
        title: 'Portfolio'
      },

      contact: {
        title: 'Drop me a line!'
      }
    }
  }

render() {
  return (
    <Router>
      <Container className='p-0' fluid={true}>
        <Navbar bg='transparent' expand='lg' >
          <Navbar.Brand>
           <img className='logo' src={Logo} alt='logo' width={175} height={175} />
          </Navbar.Brand> 

          <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />

          <Navbar.Collapse id='navbar-toggle'>

            <Nav className='ml-auto font-weight-bolder'>
              <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/about'>About</Link>
              <Link className='nav-link' to='/portfolio'>Portfolio</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>
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
             <About 
              title={this.state.about.title}
              subTitle={this.state.about.subTitle}
              text={this.state.about.text}
            />} />
           <Route path='/portfolio' exact render={() =>            
            <Portfolio 
              title={this.state.portfolio.title}
              subTitle={this.state.portfolio.subTitle}
              text={this.state.portfolio.text}
            />} />
           <Route path='/contact' exact render={() =>            
            <Contact 
              title={this.state.contact.title}
              subTitle={this.state.contact.subTitle}
              text={this.state.contact.text}
            />} />
        </Switch> 
       <Footer />
      </Container>
    </Router>
    );
  }
}

export default App;
