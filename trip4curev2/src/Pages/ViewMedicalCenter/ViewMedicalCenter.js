import React, { useEffect, useState } from 'react'
import '../ViewMedicalCenter/ViewMedicalCenter.css'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import MedicalCenterInfoPages_1 from '../ViewMedicalCenterInfoPages/MedicalCenterInfo';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Utilies/ScrollTop';


const ViewMedicalCenter = () => {

    const[hospitals,setHospitals] = useState([])

    useEffect(() => {
        const fetchHospitals = async () => {
          try {
            const response = await fetch('http://13.234.216.30:8080/all_hospital/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            });
    
            const data = await response.json();
            const hospitalsData = data.Hospital

            setHospitals(()=>([...hospitalsData]))
          } catch (error) {
            console.error('Error fetching search results:', error);
          }
        };
    
        fetchHospitals();
      }, []);
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
                        
                        <Row className='mb-5 justify-content-around'> 
                        <div className='col-md-9 pt-5 '>
                            {
                                hospitals.length > 0 ?
                                <Row className='g-4'>
                                {
    
                                    hospitals.map(hospital =>
                                    <Col md={6} key={hospital.id}>
                                    <Link to={`/view-medical-center/${hospital.id}`} className="sliderblock"> 
                                <Card className="text-center">
                                <div className="image-block">
                                <Card.Img variant="top" src={hospital.profile_image ? 'http://13.234.216.30:8080'+hospital.profile_image : ''} />
                                </div>
                                <Card.Body>
                                    <Card.Title><h4 className='card-heading'>{hospital.hospital_name}</h4></Card.Title>
                                    <Card.Text><p className='card-sub-heading-view-medical'>{hospital.hospital_city}</p></Card.Text>
                                    <Card.Text><p>{hospital.hospital_country} - 16 Specialties</p></Card.Text>
                                </Card.Body>
                                </Card>
                                </Link>
                                    </Col>
                                    )
                                }
                                </Row>
                                :
                                <p className='my-5 text-center'>No hosiptals available</p>
                            }
                           
                        </div>
                        </Row>
                    </Row>
                    
                </Container>
            </section>
            <Footer />
        </>
  )
}

export default ViewMedicalCenter