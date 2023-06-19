
import React from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Destination.css'
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Select from 'react-select';



const speciality = [
  { value: 'Addiction Treatment', label: 'Addiction Treatment' },
  { value: 'Aesthetics', label: 'Aesthetics' },
  { value: 'Anesthesiology', label: 'Anesthesiology' },
  { value: 'Bariatric Surgery', label: 'Bariatric Surgery' },
  { value: 'Bone Marrow Transplant', label: 'Bone Marrow Transplant' },
  { value: 'Cancer Treatment', label: 'Cancer Treatment' },
  { value: 'Cardiology', label: 'Cardiology' },
  { value: 'Cosmetic Surgery', label: 'Cosmetic Surgery' },
  { value: 'Dental', label: 'Dental' },
  { value: 'Dermatology', label: 'Dermatology' },
  { value: 'Dialysis', label: 'Dialysis' },
  { value: 'Ear Nose And Throat', label: 'Ear Nose And Throat' },
  { value: 'Endocrinology', label: 'Endocrinology' },
  { value: 'Eye Surgery', label: 'Eye Surgery' },
  { value: 'Fertility Treatments', label: 'Fertility Treatments' },
  { value: 'Gastroenterology', label: 'Gastroenterology' },
  { value: 'General Surgery', label: 'General Surgery' },
  { value: 'Hair Transplant', label: 'Hair Transplant' },
  { value: 'Hematology', label: 'Hematology' },
  { value: 'Imaging', label: 'Imaging' },
  { value: 'Medical Check Ups', label: 'Medical Check Ups' },
  { value: 'Nephrology', label: 'Nephrology' },
  { value: 'Neurology', label: 'Neurology' },
  { value: 'Neuro Surgery', label: 'Neuro Surgery' },
  { value: 'Ob Gyn', label: 'Ob Gyn' },
  { value: 'Orthopedics', label: 'Orthopedics' },
  { value: 'Pediatrics', label: 'Pediatrics' },
  { value: 'Rehabilitation', label: 'Rehabilitation' },
  { value: 'Stem', label: 'Stem' },
  { value: 'Thyroid', label: 'Thyroid' },
  { value: 'Urology', label: 'Urology' },
  { value: 'Vascular Surgery', label: 'Vascular Surgery' },

]



const Destination1 = () => {
  return (
      <>
          <Header />
          <section>
              <Container>
                  <Row>
                        <div className='col-md-9 mx-auto mt-5 text-center '>
                            <h2 className='destination1-main-heading'>Medical Tourism to India</h2>
                            <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                        </div>  
                  </Row>
                  <p className='mt-5 search-country'>Search India for</p>
                  <Row>
                       
                    <Col xl={3} md={4} className="col-2  me-3">
                        <Select className="" placeholder="--All Specialties--" options={speciality}></Select>  
                    </Col>
                    
                    <Col xl="3">
                        <p className='browse-country'>or Browse India Hospital and clinics</p>
                    </Col>
          
                {/* <select  className="select-drop-menu"  value={selectedOption} onChange={handleOptionChange}>
                  <option  className="select-drop-menu" value="">-- Select --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select> */}
          
                  </Row>
                  <Row>
                    <div className='col-md-8 '>
                      <p className='mt-5 destination-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                       <p className='mt-4 destination-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                       <p className='mt-4 destination-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                       <p className='mt-4 destination-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                    </div>
                  </Row>
              </Container>
          </section>
          <Footer />
      </>
  )
}

export default Destination1