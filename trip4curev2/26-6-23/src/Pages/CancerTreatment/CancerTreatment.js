import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './CancerTreatment.css'

const CancerTreatment = () => {

    const[hospitals,setHospitals] = useState([])
    
    useEffect(() => {

        const fetchSearchResults = async () => {
          try {
            const response = await fetch('http://13.234.216.30:8080/search_services/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({service_name : 'Cancer Treatment'})
            });
    
            const hospitalsData = await response.json();
            if(hospitalsData.length){
                setHospitals(()=>([...hospitalsData]));
            }
          } catch (error) {
            console.error('Error fetching search results:', error);
          }
        };
    
        fetchSearchResults();
      }, []);


  return (
      <React.Fragment>
          <Header />
          <section className='cancer-card-page'>
              <Container>
                  <Row>
                      <div className='col-md-9 mx-auto mt-5 text-center '>
                          <h2 className='cancer-card-main-heading'>Cancer Treatment Hospitals</h2>
                          <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                      </div>
                  </Row>
                  <Row className='mb-5 justify-content-center'> 
                  <div className='col-md-9 pt-5 '>
                      {
                          hospitals.length > 0 ?
                          <Row className='g-4'>
                          {

                              hospitals.map(hospital =>
                                <Col md={6} key={hospital.id}>
                                <Link to={`/view-medical-center/${hospital.hospital.id}`} className="sliderblock"> 
                            <Card className="text-center">
                            <div className="image-block">
                            <Card.Img variant="top" src={hospital.hospital.profile_image ? 'http://13.234.216.30:8080'+hospital.hospital.profile_image : ''} />
                            {/* <Card.Img variant="top" src={hospital.hospital.profile_image} /> */}
                            </div>
                            <Card.Body>
                                <Card.Title><h4 className='card-heading'>{hospital.hospital.hospital_name}</h4></Card.Title>
                                <Card.Text><p className='card-sub-heading-view-medical'>{hospital.hospital.hospital_city}</p></Card.Text>
                                <Card.Text><p>{hospital.hospital.hospital_country} - 16 Specialties</p></Card.Text>
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
              </Container>
          </section>
        <Footer />
      </React.Fragment>
  )
}

export default CancerTreatment