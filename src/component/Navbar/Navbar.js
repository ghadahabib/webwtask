
import {React} from 'react';
import './Navbar.scss';
import logo from '../../imges/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useScrollPosition } from '../../hooks';
const Navigation = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const scrollPosition = useScrollPosition();
  return (
    <Navbar  expand="lg" fixed="top" id="navbar"  className={classNames(
      scrollPosition > 0 ? 'shadow  background-dark' : 'shadow-none',
      'fixed  z-20 transition-shadow')}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-between"id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">browser</Nav.Link>
            <Nav.Link href="#link">bootcamps</Nav.Link>
            <Nav.Link href="#link">how it works</Nav.Link>
            <Nav.Link href="#link">testemonial</Nav.Link>
          </Nav>
          <Button className='custm-btn'>About us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );

  
}

export default Navigation;