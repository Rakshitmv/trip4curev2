import React from 'react'
import '../ViewMedicalCenter/ViewMedicalCenter.css'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MedicalCenterInfoPages_1 from '../ViewMedicalCenterInfoPages/MedicalCenterInfoPages_1';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


const ViewMedicalCenter = () => {
    return (
        <>
            <Header />
            <section id= 'view-medical-page' className='view-medical-center-page '>
                <Container>
                    <Row>
                        <div className='col-md-9 mx-auto mt-5 text-center'>
                            <h1 className='medical-center-heading'>Medical Centers</h1>
                            <p className='medical-center-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                        </div>
                        
                        <div className='col-md-9 pt-5 mx-auto card-series-1'>
                            
                            <Link to={'/view-medical-center/medical-center-info-page_1'} className="sliderblock"> 
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Galenia Hospital</h4></Card.Title>
                                <Card.Text><h4>Mexico City</h4></Card.Text>
                                <Card.Text>Mexico - 16 Specialties</Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>

                            <Link to={'/view-medical-center/medical-center-info-page_2'} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc-2.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Apollo Hospital Chennai</h4></Card.Title>
                                <Card.Text><h4>Chennai</h4></Card.Text>
                                <Card.Text>India - 25 Specialties</Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-md-9 pt-5 mx-auto card-series-2'>
                            <Link to={'/view-medical-center/medical-center-info-page_3'} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc3.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Hospital Universitario Austral</h4></Card.Title>
                                <Card.Text><h4>Santa Fe</h4></Card.Text>
                                <Card.Text>Argentina - 3 Specialties</Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>

                            <Link to={'/view-medical-center/medical-center-info-page_4'} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc4.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>KPJ Damansara Hospital</h4></Card.Title>
                                <Card.Text><h4>Kuala Lumpur</h4></Card.Text>
                                <Card.Text>Malaysia - 28 Specialties</Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-md-9 pt-5 mx-auto mb-5 card-series-2'>
                            <Link to={'/view-medical-center/medical-center-info-page_5'} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc6.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Hospital Universitario Austral</h4></Card.Title>
                                <Card.Text><h4>Santa Fe</h4></Card.Text>
                                <Card.Text>Argentina - 3 Specialties</Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                               <Link to={'/view-medical-center/medical-center-info-page_1'} className="sliderblock">
                                <Card className="text-center">
                                <div className="image-block">
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                                </div>
                                <Card.Body>
                                    <Card.Title><h4 className='card-heading'>Galenia Hospital</h4></Card.Title>
                                    <Card.Text><h4>Mexico City</h4></Card.Text>
                                    <Card.Text>Mexico - 16 Specialties</Card.Text>
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

export default ViewMedicalCenter