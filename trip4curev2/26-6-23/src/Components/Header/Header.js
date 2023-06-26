import React,{useEffect,useState} from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './Nav/Menu';

function Header() { 


  return (
    <React.Fragment>

    <Navbar expand="lg" className='nav-grad navbar-light mainmenu-nav navbar navbar-expand-lg classic transparent' style={{height:'16vh'}}>
      <Container className='position-relative'>
        <Link to={'/'}><Navbar.Brand className='fw-bolder' to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`}  style={{width:'75px'}} alt="" /></Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Menu />
      </Container>
    </Navbar>
    </React.Fragment>
  )
}

export default Header