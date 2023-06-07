import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignIn/SignIn.css'
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function ForgotPassword() {
    const navigate = useNavigate();



    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
    });


    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    let onSubmit = async (e) => {
        try {
            let res = await fetch("http://13.234.216.30:8080/forgotpasswordapi/", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                }),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            let resJson = await res.json();
            if (res.status === 201) {
                localStorage.setItem("verifymail", email);
                navigate("/verify-otp")
                console.log(res)
                setMsg(res.msg)

            } else {
                setMsg(resJson.message||resJson.error)
                console.log(res)
            }
        } catch (err) {
            setMsg("Something wents wrong")
            setMsg(err.message)
            console.log(err.message);
        }
    }

    return (
     <>
        <Header />
        <div className='login-reg-wrapper h-100 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={9} lg={7} xl={5} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""><img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" />
                            <p class="lead text-center">Recover your password</p>
                            <p>Fill in your e-mail address below and we will send you an email with further instructions.

                            </p>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <input name="email" type="text" {...register('email')} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                    <span style={{color:'red'}}>{msg}</span>
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

            {/* <Container fluid className='py-3'>
                <p className="text-center text-2 text-muted mb-0">Copyright © 2023 <Link to={'/'}>trip4cure</Link>. All Rights Reserved.</p>
            </Container> */}
        </div>
        <Footer />
     </>   
    )
}

export default ForgotPassword