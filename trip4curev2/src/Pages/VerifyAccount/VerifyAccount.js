import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css'

function VerifyAccount() {
    return (
        <div className='login-reg-wrapper h-100 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={9} lg={7} xl={7} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" />
                            <p class="lead text-center">Please Enter One-Time Password to verify your account</p>
                            <p class="lead text-center" style={{fontSize:"1rem"}}>A one time password has been sent to your email</p>
                            <Form className='p-4 px-sm-5 mx-5'>

                                <Form.Group className="mx-3" controlId="formBasicPassword">
                         
                                    <Form.Control type="password" placeholder=" Enter the OTP" />
                                </Form.Group>


                                <div className='d-grid my-4 mx-3'>
                                    <Button variant="primary" type="submit">
                                      Validate
                                    </Button>
                                </div>
                            </Form>
                            <p class="text-muted text-center mb-2">Resend One-Time Password</p>
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

export default VerifyAccount