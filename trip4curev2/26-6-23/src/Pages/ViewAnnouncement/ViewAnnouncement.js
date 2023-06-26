import React from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ViewAnnouncement.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ViewAnnouncement = () => {
  return (
      <>
          <Header />
          <section>
              <Container>
                  <Row>
                      <div className='col-md-9 mx-auto mt-5 text-center '>
                          <h2 className='view-announce-main-heading'>Announcements</h2>
                          <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                      </div>
                  </Row>
                  <Row>
                      <div className='col-md-9 mx-auto mt-5  view-announce-card-1'>
                        <Card className="border-0 position-relative blog-card">
                            <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog1.png`} />
                            <Card.Body>
                            <Card.Title className='card-title card-h'><h5 className='medical-card-heading'>Our New Miami Beach Hotel is Open Now!</h5></Card.Title>
                            <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                            <Link to={'/view-all-announcement/announce-card-1'}><Button className="text-link" variant="link">Read More</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className="border-0 position-relative blog-card">
                            <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog2.png`} />
                            <Card.Body>
                            <Card.Title className='card-title card-h'><h5 className='medical-card-heading'>Know the Secreat of Resort Its Amazing!</h5></Card.Title>
                            <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                            <Link to={'/view-all-announcement/announce-card-2'}><Button className="text-link" variant="link">Read More</Button></Link>
                            </Card.Body>
                        </Card>
                      </div>
                  </Row>
                  <Row> 
                      <div className='col-md-9 mx-auto mt-5  view-announce-card-1'>
                        <Card className="border-0 position-relative blog-card">
                            <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog3.png`} />
                            <Card.Body>
                            <Card.Title className='card-title card-h'><h5 className='medical-card-heading'>How to book a Resort in best price on Mountains</h5></Card.Title>
                            <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                            <Link to={'/view-all-announcement/announce-card-3'}><Button className="text-link" variant="link">Read More</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className="border-0 position-relative blog-card">
                            <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog1.png`} />
                            <Card.Body>
                            <Card.Title className='card-title card-h'><h5 className='medical-card-heading'>Our New Miami Beach Hotel is Open Now!</h5></Card.Title>
                            <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                            <Link to={'/view-all-announcement/announce-card-4'}><Button className="text-link" variant="link">Read More</Button></Link>
                            </Card.Body>
                        </Card>
               
                      </div>
                  </Row>
                  <Row>
                      <div className='col-md-9 mx-auto mt-5  view-announce-card-1'>
                       <Card className="border-0 position-relative blog-card">
                            <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog2.png`} />
                            <Card.Body>
                            <Card.Title className='card-title card-h'><h5 className='medical-card-heading'>Know the Secreat of Resort Its Amazing!</h5></Card.Title>
                            <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                            <Link to={'/view-all-announcement/announce-card-5'}><Button className="text-link" variant="link">Read More</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className="border-0 position-relative blog-card">
                            <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog1.png`} />
                            <Card.Body>
                            <Card.Title className='card-title card-h'><h5 className='medical-card-heading'>Our New Miami Beach Hotel is Open Now!</h5></Card.Title>
                            <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                             <Link to={'/view-all-announcement/announce-card-6'}><Button className="text-link" variant="link">Read More</Button></Link>
                            </Card.Body>
                        </Card>
               
                      </div>
                   </Row>
              </Container>
          </section>
          <Footer />
      </>
  )
}

export default ViewAnnouncement