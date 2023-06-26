
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
                      <button type="submit"   className="btn   w-60  search-big-btn-destination" style={{ backgroundColor: '#b8353b', color: 'white' }}><i class="fa fa-search"></i> Search</button>
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
                  <Row>
                    <div className='col-md-9 pt-5 mx-auto medical-destination-card-series-1'>
                      <Link to={''} className="sliderblock">
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
                            <Link to={''} className="sliderblock">
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
                    <div className='col-md-9 pt-5 mx-auto medical-destination-card-series-1'>
                      <Link to={''} className="sliderblock">
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
                            <Link to={''} className="sliderblock">
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
                    <div className='col-md-9 pt-5 mb-5 mx-auto medical-destination-card-series-1'>
                      <Link to={''} className="sliderblock">
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
                            <Link to={''} className="sliderblock">
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
              </Container>
          </section>
          <Footer />
      </>
  )
}

export default Destination1