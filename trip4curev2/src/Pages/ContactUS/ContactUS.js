import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css' 

const ContactUS = () => {
  return (
     <div className='login-reg-wrapper h-100 d-flex flex-column'> 
        <Container className='my-auto'>
            <Row>
                <Col md={9} lg={7} xl={5} className="mx-auto">
                    <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                        <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img  src={`${process.env.PUBLIC_URL}/images/logo.png`}height={130} width={100}/></Link> </div>
                        <hr class="mx-n4 mx-sm-n5" />
                        <p class="lead text-center">Contact US</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="fullName">
                                <Form.Label> First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="fullName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" />
                            </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Contact Number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="fullName">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter Country" />
                            </Form.Group>
                       
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter City" />
                            </Form.Group>
                            
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="" placeholder="Enter Message" />
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