import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './Nav/Menu';

function Header() { 
  return (
    <Navbar expand="lg" className='nav-grad navbar-light mainmenu-nav navbar navbar-expand-lg classic transparent'>
      <Container className='position-relative'>
        <Link to={'/'}><Navbar.Brand className='fw-bolder' to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`}  alt="" /></Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Menu />
      </Container>
    </Navbar>
  )
}

export default Header