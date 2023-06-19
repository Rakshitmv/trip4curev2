import React from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ViewMedicalTourismGuide.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


const ViewMedicalTourismGuide = () => {
  return (
      <>
          <Header />
          <section>
              <Container>
                  <Row>
                       <div className='col-md-9 mx-auto mt-5 text-center '>
                            <h2 className='medical-tourism-main-heading'>Medical Tourism </h2>
                            <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                        </div>  
                  </Row>
                  <Row>
                      <div className='col-md-9 pt-5 mx-auto medical-tourism-guide-card'>
                        <Card className="sliderblock mgt-block">
                            <Card.Body>
                            <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                            <Card.Text>
                                <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                            </Card.Text>
                            <Button className="text-link" variant="link">Read More</Button>
                            </Card.Body>
                        </Card>
                        <Card className="sliderblock mgt-block">
                            <Card.Body>
                            <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                            <Card.Text>
                                <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                            </Card.Text>
                            <Button className="text-link" variant="link">Read More</Button>
                            </Card.Body>
                        </Card>
                      </div>
                  </Row>
                  <Row>
                      <div className='col-md-9 pt-5 mx-auto medical-tourism-guide-card'>
                        <Card className="sliderblock mgt-block">
                            <Card.Body>
                            <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                            <Card.Text>
                                <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                            </Card.Text>
                            <Button className="text-link" variant="link">Read More</Button>
                            </Card.Body>
                        </Card>
                        <Card className="sliderblock mgt-block">
                            <Card.Body>
                            <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                            <Card.Text>
                                <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                            </Card.Text>
                            <Button className="text-link" variant="link">Read More</Button>
                            </Card.Body>
                        </Card>
                      </div>
                  </Row>
                   <Row>
                      <div className='col-md-9 pt-5 mb-5 mx-auto medical-tourism-guide-card'>
                        <Card className="sliderblock mgt-block">
                            <Card.Body>
                            <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                            <Card.Text>
                                <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                            </Card.Text>
                            <Button className="text-link" variant="link">Read More</Button>
                            </Card.Body>
                        </Card>
                        <Card className="sliderblock mgt-block">
                            <Card.Body>
                            <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                            <Card.Text>
                                <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                            </Card.Text>
                            <Button className="text-link" variant="link">Read More</Button>
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

export default ViewMedicalTourismGuide