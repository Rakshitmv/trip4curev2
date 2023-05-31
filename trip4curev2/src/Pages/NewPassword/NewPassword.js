import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css'

function NewPassword() {
    return (
        <div className='login-reg-wrapper h-100 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={9} lg={7} xl={5} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" />
                            <p class="lead text-center">Create New Password!</p>
                            <Form>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Enter Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Current Password" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="New Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <div className='d-grid my-4'>
                                    <Button variant="primary" type="submit">
                                       Set Password
                                    </Button>
                                </div>
                            </Form>
                            <p class="text-muted text-center mb-2">Already have an account? <Link to={'/sign-in'}>Log In</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='py-3'>
                <p className="text-center text-2 text-muted mb-0">Copyright © 2023 <Link to={''}>trip4cure</Link>. All Rights Reserved.</p>
            </Container>
        </div>
    )
}

export default NewPassword