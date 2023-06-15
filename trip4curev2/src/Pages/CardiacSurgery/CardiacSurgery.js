import React from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './CardiacSurgery.css'

const CardiacSurgery = () => {
  return (
      <>
          <Header />
          <section className='cardiac-card-page'>
              <Container>
                  <Row>
                      <div className='col-md-9 mx-auto mt-5 text-center '>
                          <h2 className='cardiac-card-main-heading'>Cardiac Surgery Hospitals</h2>
                          <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                      </div>
                  </Row>
                  <Row>
                        <div className='col-md-9 pt-5 mx-auto cancer-card-series-1'>
                        
                            <Link to={''} className="sliderblock"> 
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='cardiac-card-heading'>Galenia Hospital</h4></Card.Title>
                                <Card.Text><p className='cardiac-card-sub-heading'>Mexico City</p></Card.Text>
                                <Card.Text><p className='cardiac-card-sub-heading'>Mexico - 16 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>

                            <Link to={''} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc-2.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='cardiac-card-heading'>Apollo Hospital Chennai</h4></Card.Title>
                                <Card.Text><p className='cardiac-card-sub-heading'>Chennai</p></Card.Text>
                                <Card.Text><p className='cardiac-card-sub-heading'>India - 25 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                        </div>
                   </Row>
                   <Row>
                        <div className='col-md-9 pt-5 mx-auto cancer-card-series-2'>
                            <Link to={''} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc3.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='cardiac-card-heading'>Hospital Universitario Austral</h4></Card.Title>
                                <Card.Text><p className='cardiac-card-sub-heading'>Santa Fe</p></Card.Text>
                                <Card.Text><p className='cardiac-card-sub-heading'>Argentina - 3 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>

                            <Link to={''} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc4.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='cardiac-card-heading'>KPJ Damansara Hospital</h4></Card.Title>
                                <Card.Text><p className='cardiac-card-sub-heading'>Kuala Lumpur</p></Card.Text>
                                <Card.Text><p className='cardiac-card-sub-heading'>Malaysia - 28 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </Row>
                     <Row>
                        <div className='col-md-9 pt-5 mx-auto mb-5 cancer-card-series-2'>
                            <Link to={''} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc6.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='cardiac-card-heading'>Hospital Universitario Austral</h4></Card.Title>
                                <Card.Text><p className='cardiac-card-sub-heading'>Santa Fe</p></Card.Text>
                                <Card.Text><p className='cardiac-card-sub-heading'>Argentina - 3 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                               <Link to={''} className="sliderblock">
                                <Card className="text-center">
                                <div className="image-block">
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                                </div>
                                <Card.Body>
                                    <Card.Title><h4 className='cardiac-card-heading'>Galenia Hospital</h4></Card.Title>
                                    <Card.Text><p className='cardiac-card-sub-heading'>Mexico City</p></Card.Text>
                                    <Card.Text><p className='cardiac-card-sub-heading'>Mexico - 16 Specialties</p></Card.Text>
                                </Card.Body>
                                </Card>
                                </Link>
                        </div>
                    </Row>
              </Container>
          </section>
              
          
          <Footer />
      </>
  )
}

export default CardiacSurgery