import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignIn/SignIn.css'

function ForgotPassword() {
  return (
    <div className='login-reg-wrapper h-100 d-flex flex-column'> 
        <Container className='my-auto'>
            <Row>
                <Col md={9} lg={7} xl={5} className="mx-auto">
                    <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                        <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""><img  src={`${process.env.PUBLIC_URL}/images/logo.png`}height={130} width={100}/></Link> </div>
                        <hr class="mx-n4 mx-sm-n5" />
                        <p class="lead text-center">Recover your password</p>
                        <p>Fill in your e-mail address below and we will send you an email with further instructions.

</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                             
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <div className='d-grid my-4'>
                                <Button variant="primary" type="submit">
                                    Recover your password
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

export default ForgotPassword