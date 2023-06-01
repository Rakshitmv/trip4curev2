import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Nav/Menu.css';  
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="ms-auto me-auto">
            <Link to={'/welcome'} className="nav-link">Getting Started</Link>
            <Link to={'/'} className="nav-link">Dashboard</Link>
            <Link to={'/sign-in'} className="nav-link">My Account</Link>
            <NavDropdown title="New Project" id="basic-nav-dropdown">
              <Link className='dropdown-item' to={'/new-project'}>New Design Project</Link>
              <NavDropdown.Item href="">New Video Project</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className='ms-auto'>
          <Link className='nav-link' to={'/user-sign-in'}>User Sign In</Link>
            <Link className='nav-link' to={'/hospital-sign-in'}>Hospital Sign In</Link>
            <Nav.Link className='btn' style={{backgroundColor: '#b8353b' , color: 'white'}} href="/trip4curev2/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <NavDropdown className='user-profile ml-2 ml-sm-3 d-flex align-items-center' title="Hi Alex" id="basic-nav-dropdown">
            <NavDropdown.Item href="">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Logout</NavDropdown.Item>
        </NavDropdown>  */}
    </>
  )
}

export default Menu