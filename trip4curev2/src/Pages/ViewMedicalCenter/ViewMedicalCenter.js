import React from 'react'
import '../ViewMedicalCenter/ViewMedicalCenter.css'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MedicalCenterInfoPages_1 from '../ViewMedicalCenterInfoPages/MedicalCenterInfoPages_1';


const ViewMedicalCenter = () => {
    return (
        <>
            <section id= 'view-medical-page' className='view-medical-center-page '>
                <Container>
                    <Row>
                        <div className='col-md-7 pt-5 mx-auto card-series-1'>
                            <Link to={'/view-medical-center/medical-center-info-page_1'} className="sliderblock"> 
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Galenia Hospital</h4></Card.Title>
                                <Card.Text>Mexico - 16 Specialties</Card.Text><br></br>
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
                                <Card.Text>India - 25 Specialties</Card.Text><br></br>
                            </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-md-7 pt-5 mx-auto card-series-2'>
                            <Link to={'/view-medical-center/medical-center-info-page_3'} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc3.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Hospital Universitario Austral</h4></Card.Title>
                                <Card.Text>Argentina - 3 Specialties</Card.Text><br></br>
                            </Card.Body>
                            </Card>
                            </Link>

                            <Link to={'/view-medical-center/medical-center-info-page_4'} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc4.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>KPJ Damansara Specialist Hospital</h4></Card.Title>
                                <Card.Text>Malaysia - 28 Specialties</Card.Text><br></br>
                            </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-md-7 pt-5 mx-auto card-series-2'>
                            <Link to={'/view-medical-center/medical-center-info-page_5'} className="sliderblock">
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc6.png`} />
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>Hospital Universitario Austral</h4></Card.Title>
                                <Card.Text>Argentina - 3 Specialties</Card.Text><br></br>
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
                                    <Card.Text>Mexico - 16 Specialties</Card.Text><br></br>
                                </Card.Body><br></br>
                                </Card>
                                </Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
  )
}

export default ViewMedicalCenter