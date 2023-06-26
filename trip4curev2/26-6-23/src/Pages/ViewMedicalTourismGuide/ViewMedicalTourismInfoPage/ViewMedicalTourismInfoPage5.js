import React from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ViewMedicalTourismInfoPage.css'
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const ViewMedicalTourismInfoPage5 = () => {
  return (
      <>
          <Header />
          <section>
              <Container>
                  <Row>
                       <div className='col-md-9 mx-auto mt-5 text-center '>
                            <h2 className='medical-tourism-info-main-heading'>Medical Tourism </h2>
                            <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                        </div>  
                  </Row>
                  <Row>
                      <div className='col-md-12 mx-auto mt-5'>
                          <p className='announce-info-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                          <p className='announce-info-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                          <p className='announce-info-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                          <p className='announce-info-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                      </div>
                  </Row>
              </Container>
          </section>
          <Footer />
      </>
  )
}

export default ViewMedicalTourismInfoPage5