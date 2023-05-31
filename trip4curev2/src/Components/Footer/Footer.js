import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
    
    <Container>
      <Row  className='py-5'>
        <Col md={2}>
        <img  src={`${process.env.PUBLIC_URL}/images/logo-w.png`} alt='' height={120} />
        </Col>
        <Col md={4}>
          <h5 className='footer-font'>Quick Links</h5>
          <Row>
            <Col md={6}>
              <ul className="footer-links">
                <li><Link to={''}>Home</Link></li>
                <li><Link to={''}>Guide</Link></li>
                <li><Link to={''}>How it Works</Link></li>
                <li><Link to={''}>Destinations</Link></li>
                <li><Link to={''}>Information</Link></li>
                <li><Link to={''}>Resources</Link></li>
              </ul>
            </Col>
            <Col md={6}>
            <ul className="footer-links">
                <li><Link to={''}>Privacy</Link></li>
                <li><Link to={''}>Terms of Use</Link></li>
                <li><Link to={''}>Disclaimer</Link></li>
                <li><Link to={''}>About</Link></li>
                <li><Link to={''}>Contact Us</Link></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <h5>Featured Specialties</h5>
          <ul className="footer-links">
                <li><Link to={''}>Cancer Treatment</Link></li>
                <li><Link to={''}>Cardiac Surgery</Link></li>
                <li><Link to={''}>Cosmetics Surgery</Link></li>
                <li><Link to={''}>Fertility Treatment</Link></li>
                <li><Link to={''}>Neurology</Link></li>
                <li><Link to={''}>Orthopedic Surgery</Link></li>
              </ul>
        </Col>
        <Col md={2}>
        <h5>Connect With Us</h5>
        <div className='footer-social'>
          <Link to={''}><i className='fa fa-twitter'></i></Link>
          <Link to={''}><i className='fa fa-facebook'></i></Link>
          <Link to={''}><i className='fa fa-linkedin'></i></Link>
          </div>
        </Col>
      </Row>
      <Row className='text-center'>
        <hr />
        <p className='text-white'>Copyright © 2023 Trip4Cure, All Rights Reserved</p>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer