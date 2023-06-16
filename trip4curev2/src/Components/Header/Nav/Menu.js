import React,{useEffect,useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Nav/Menu.css';  
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Menu() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    console.log('token>>>',token,"type",user)
    settoken(token);
    setuser(user);
    //console.log(">>>>>>>>>>>>>>",params.name)
});


const [token,settoken ] = useState("");
const [user,setuser ] = useState("");


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
          {token ? (<>
            <Link className='btn' style={{ backgroundColor: '#b8353b', color: 'white' }} to={'/contact-us' } >Contact Us</Link>
            <Link className='nav-link' to={'/user-sign-in'}><i class="fa fa-user" style={{fontSize:'24px'}}></i></Link>
            {user=='Hospital User' ? (<> <Link className='nav-link' to={'/hospital-sign-in'}><i class="fa fa-database" style={{fontSize:'22px'}}></i></Link>
            </>):<></>}
          </>):(<>
            <Link className='nav-link' to={'/user-sign-in'}>User Sign In</Link>
            <Link className='nav-link' to={'/hospital-sign-in'}>Hospital Sign In</Link>
            <Link className='btn' style={{ backgroundColor: '#b8353b', color: 'white' , fontSize: '15px' }} to={'/contact-us' } >CONTACT US</Link>
            
          </>)}
          {/* <Link className='nav-link' to={'/user-sign-in'}>User Sign In</Link>
            <Link className='nav-link' to={'/hospital-sign-in'}>Hospital Sign In</Link> */}
          {/* <Link className='btn' style={{ backgroundColor: '#b8353b', color: 'white' }} to={'/contact-us' } >Contact Us</Link> */}
          
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