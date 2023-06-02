import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css' 
import '../ContactUS/ContactUS.css'

const ContactUS = () => {
  return (
     <div className='login-reg-wrapper h-100 d-flex flex-column'> 
        <Container className='my-auto'>
            <Row>
                <Col md={9} lg={8} xl={6} className="mx-auto">
                    <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                        <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img  src={`${process.env.PUBLIC_URL}/images/logo.png`}height={130} width={100}/></Link> </div>
                        <hr class="mx-n4 mx-sm-n5" />
                        <p class="lead text-center">Contact US</p>
                          <Form>
                              <div className='field1-2'>
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label> First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                              </div><br></br>
                              <div className='field1-2'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Email" />
                                </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" placeholder="Contact Number" />
                                </Form.Group>
                              </div><br></br>
                              <div  className='field1-2'>
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" />
                                </Form.Group>
                        
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" />
                                </Form.Group>
                              </div><br></br>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label className='' >Message</Form.Label>
                                  <Form.Control className="pb-5 message"  type="text" placeholder="Enter Message" />
                                
                            </Form.Group>
                            
                            <div className='d-grid my-4'>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                        
                    </div>
                </Col>
            </Row>
        </Container>

        <Container fluid className='py-3'>
        <p className="text-center text-2 text-muted mb-0">Copyright © 2023 <Link to={'/'}>trip4cure</Link>. All Rights Reserved.</p>
        </Container>
    </div>
  )
}

export default ContactUS