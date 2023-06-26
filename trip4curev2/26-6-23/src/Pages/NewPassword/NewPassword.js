import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css'
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function NewPassword() {
    const validationSchema = Yup.object().shape({

        checkpassword: Yup.string()
            .required('Current Password is required')
            .min(8)
            .max(15),
        setpassword: Yup.string()
            .required('Password is required')
            .min(8)
            .max(15),
        confirmpassword: Yup.string()
            .required('Confirm Password is required')
            .min(8)
            .max(15)
            .oneOf([Yup.ref('setpassword')], 'Passwords does not match')
    });


    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {

        return false;
    }

    return (
     <>
        <Header />
        <div className='login-reg-wrapper h-100 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={9} lg={7} xl={5} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            {/* <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" /> */}
                            <p class="lead text-center">Create New Password!</p>
                            <Form onSubmit={handleSubmit(onSubmit)}>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Enter Current Password</Form.Label>
                                    <input name="checkpassword" type="password" {...register('checkpassword')} placeholder='Enter Current Password' maxlength="15" className={`form-control ${errors.checkpassword ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.checkpassword?.message}</div>
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <input name="setpassword" type="password" {...register('setpassword')} placeholder='Enter New Password' maxlength="15" className={`form-control ${errors.setpassword ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.setpassword?.message}</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <input name="confirmpassword" type="password" {...register('confirmpassword')} placeholder='Confirm Password' maxlength="15" className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.confirmpassword?.message}</div>
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

            {/* <Container fluid className='py-3'>
                <p className="text-center text-2 text-muted mb-0">Copyright © 2023 <Link to={''}>trip4cure</Link>. All Rights Reserved.</p>
            </Container> */}
        </div>
        <Footer />
     </>        
    )
}

export default NewPassword