import React, {useState} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css'
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

function SignUp() {


const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required('First name is required')
            .min(2),
        lastname: Yup.string()
            .required('Last name is required')
            .min(2),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
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

    const [userInput, setUserInput] = useState("");
    const [userInput1, setUserInput1] = useState("");
    const handleInput = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setUserInput(formattedNumber);
    };

    const handleInput1 = (e) => {
        const formattedNumber = formatNumber1(e.target.value);
        setUserInput1(formattedNumber);
    };

    const formatNumber = (value) => {
        return value.replace(/[^A-Za-z]/ig, "")
    }

    const formatNumber1 = (value) => {
        return value.replace(/[^A-Za-z]/ig, "")
    }

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {

        return false;
    }



    return (
        <div className='login-reg-wrapper h-100 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={9} lg={7} xl={5} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" />
                            <p class="lead text-center">User Sign Up!</p>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label>First Name</Form.Label>
                                    <input name="firstname" type="text" {...register('firstname')} onChange={(e) => handleInput(e)} value={userInput} placeholder='Enter first name' className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.firstname?.message}</div>

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label>Last Name</Form.Label>
                                    <input name="lastname" type="text" {...register('lastname')} placeholder='Enter last name' onChange={(e) => handleInput1(e)} value={userInput1} className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.lastname?.message}</div>

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <input name="email" type="text" {...register('email')} placeholder='Enter email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Set Password</Form.Label>
                                    <input name="setpassword" type="password" {...register('setpassword')} placeholder='Enter Password' className={`form-control ${errors.setpassword ? 'is-invalid' : ''}`} maxlength="15" />
                                    <div className="invalid-feedback">{errors.setpassword?.message}</div>

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <input name="confirmpassword" type="password" {...register('confirmpassword')} placeholder='Confirm Password' maxlength="15" className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.confirmpassword?.message}</div>
                                </Form.Group>
                                <div className='d-grid my-4'>
                                    <Button variant="primary" type="submit">
                                        Sign Up
                                    </Button>
                                </div>
                            </Form>
                            <p class="text-muted text-center mb-2">Already have an account? <Link to={'/user-sign-in'}>Log In</Link></p>
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

export default SignUp