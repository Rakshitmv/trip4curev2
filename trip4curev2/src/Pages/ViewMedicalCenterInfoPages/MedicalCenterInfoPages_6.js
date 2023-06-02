import React from 'react'
import '../ViewMedicalCenterInfoPages/MedicalCenterInfoPages.css'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MedicalCenterInfoPages_6 = () => {
  return (
    <>
      <section id='medical-center-info-page_1' >
        <Container>
          <Row>
            <div className='col-md-4 mt-5 '>
              <h1>Galenia Hospital</h1>
              <img className='mt-4' src={`${process.env.PUBLIC_URL}/images/mc1.png`}></img>
              <h4>Location</h4>
            </div>
          </Row>
          <Row>
            <div className='col-md-7 mt-5'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
            </div>
          </Row>
        </Container>

      </section>
    </>
  )
}

export default MedicalCenterInfoPages_6