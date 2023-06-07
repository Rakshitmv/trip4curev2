import React from "react";
import "./Topbar.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import NewsTicker from "react-advanced-news-ticker";
import { Link } from "react-router-dom";
export const Directions = Object.freeze({ UP: 1, DOWN: 1 });
export const TickerStates = Object.freeze({ Stopped: 0, Running: 1, Paused: 2 });
// import translate from 'google-translate-api';

// const [translatedText, setTranslatedText] = useState('');

// const translatePage = async (targetLanguage) => {
//   const html = document.documentElement.innerHTML;
//   const { text } = await translate(html, { to: targetLanguage });

//   setTranslatedText(text);
// };


function Topbar() { 
    return (
      <section>
        <Container>
            <Row className="align-items-center">
                <Col md={8}>
                    <div className="d-flex align-items-center">
                        <div className="news-title me-3"><img src={`${process.env.PUBLIC_URL}/images/ic-announcement.png`} style={{height:20}}  alt="" /><span className="ps-2 d-md-inline-block d-none">Announcement</span></div>
                        <NewsTicker
                        rowHeight = {10}
                        maxRows = {2}
                        speed = {600}
                        direction = {Directions.UP}
                        duration = {4000}
                        autoStart = {true}
                        pauseOnHover = {true}
                        id = "nt-title"
                        className = "myClassName1 myClassName2">
                        <div>Using a medical tourism facilitator.</div>
                        <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
                        <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
                        <div>Nunc ultrices tortor eu massa placerat posuere.</div>
                        </NewsTicker>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="navbar-other d-flex justify-content-md-end justify-content-center">
                    <Nav className="nav social social-white">
                        <Link to={''}><i className="fa fa-twitter"></i></Link>
                        <Link to={''}><i className="fa fa-facebook"></i></Link>
                        <Link to={''}><i className="fa fa-linkedin"></i></Link>
                    </Nav>
                    <NavDropdown title="ENGLISH" className="navbar-nav flex-row align-items-center  langauge" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/">ENGLISH</NavDropdown.Item>
                        <NavDropdown.Item  href="/">SPANISH</NavDropdown.Item>
                        <NavDropdown.Item  href="/">ARABIC</NavDropdown.Item>
                    </NavDropdown>
                    
                
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    )
  }
  
  export default Topbar