import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../HospitalSignIn/SignIn.css'
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";



function HospitalSignIn() {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(8)
            .max(15)
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [msg, setMsg] = useState("");

    let onSubmit = async (e) => {
        try {
            let res = await fetch("http://13.234.216.30:8080/login/", {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password:password
              }),
              headers: {
                  "Content-Type": 'application/json',
                  "Accept": 'application/json'
              }
            });
            let resJson = await res.json();
            if (res.status === 201) {
              navigate("/")
              console.log(res)
  
            } else {
                setMsg(resJson.msg||resJson.error||resJson.message)
                console.log(res)
            }
          } catch (err) {
            setMsg("Something wents wrong")
            console.log(err);
          }
    }


  return (
    <div className='login-reg-wrapper h-100 d-flex flex-column'> 
        <Container className='my-auto'>
            <Row>
                <Col md={9} lg={7} xl={5} className="mx-auto">
                    <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                        <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img  src={`${process.env.PUBLIC_URL}/images/logo.png`}height={130} width={100}/></Link> </div>
                        <hr class="mx-n4 mx-sm-n5" />
                        <p class="lead text-center">Login to Hospital account</p>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <input name="email" type="text" {...register('email')} placeholder='Enter email' onChange={(e) => setemail(e.target.value)} value={email} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <input name="password" type="password" {...register('password')} placeholder='Enter password' onChange={(e) => setpassword(e.target.value)} value={password}  maxLength={'15'} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.password?.message}</div>
                                    <span style={{color:'red'}}>{msg}</span>
                            </Form.Group>
                            <Row className='mt-3'>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>
                                </Col>
                                <Col className='text-end'><Link to={'/forgot-password'}>Forgot Password ?</Link></Col>
                            </Row>
                            <div className='d-grid my-4'>
                                <Button variant="primary" type="submit">
                                    Sign In
                                </Button>
                            </div>
                        </Form>
                        <p class="text-muted text-center mb-2">Don't have an account? <Link to={'/hospital-sign-up'}>Sign Up</Link></p>
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

export default HospitalSignIn;