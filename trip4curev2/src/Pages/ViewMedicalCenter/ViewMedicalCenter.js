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
                            <Card className="text-center" style={{width:"420px",margin:'0 10px'}}>
                            <div className="image-block">
                            <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Galenia Hospital</h4></Card.Title>
                                <Card.Text><p className='card-sub-heading-view-medical'>Mexico City</p></Card.Text>
                                <Card.Text><p>Mexico - 16 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>

                            <Link to={'/view-medical-center/medical-center-info-page_2'} className="sliderblock">
                            <Card className="text-center" style={{width:"420px",margin:'0 10px'}}>
                            <div className="image-block">
                            <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc-2.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Apollo Hospital Chennai</h4></Card.Title>
                                <Card.Text><p>Chennai</p></Card.Text>
                                <Card.Text><p>India - 25 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-md-9 pt-5 mx-auto card-series-2'>
                            <Link to={'/view-medical-center/medical-center-info-page_3'} className="sliderblock">
                            <Card className="text-center" style={{width:"420px",margin:'0 10px'}}>
                            <div className="image-block">
                            <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc3.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Hospital Universitario Austral</h4></Card.Title>
                                <Card.Text><p>Santa Fe</p></Card.Text>
                                <Card.Text><p>Argentina - 3 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>

                            <Link to={'/view-medical-center/medical-center-info-page_4'} className="sliderblock">
                            <Card className="text-center" style={{width:"420px",margin:'0 10px'}}>
                            <div className="image-block">
                            <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc4.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>KPJ Damansara Hospital</h4></Card.Title>
                                <Card.Text><p>Kuala Lumpur</p></Card.Text>
                                <Card.Text><p>Malaysia - 28 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-md-9 pt-5 mx-auto mb-5 card-series-2'>
                            <Link to={'/view-medical-center/medical-center-info-page_5'} className="sliderblock">
                            <Card className="text-center" style={{width:"420px",margin:'0 10px'}}>
                            <div className="image-block">
                            <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc6.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Hospital Universitario Austral</h4></Card.Title>
                                <Card.Text><p>Santa Fe</p></Card.Text>
                                <Card.Text><p>Argentina - 3 Specialties</p></Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                               <Link to={'/view-medical-center/medical-center-info-page_1'} className="sliderblock">
                                <Card className="text-center" style={{width:"420px",margin:'0 10px'}}>
                                <div className="image-block">
                                <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                                </div>
                                <Card.Body>
                                    <Card.Title><h4 className='card-heading'>Galenia Hospital</h4></Card.Title>
                                    <Card.Text><p>Mexico City</p></Card.Text>
                                    <Card.Text><p>Mexico - 16 Specialties</p></Card.Text>
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