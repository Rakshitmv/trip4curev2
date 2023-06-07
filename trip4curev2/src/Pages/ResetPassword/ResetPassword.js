import React, { useState,useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css'
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function ResetPassword() {
    const navigate = useNavigate();
    useEffect(() => {
        const saved = localStorage.getItem("registrationmail");
        console.log('email>>>',saved)
        //console.log(">>>>>>>>>>>>>>",params.name)
       setemail(saved);
    });
    
    const validationSchema = Yup.object().shape({

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
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setemail] = useState("");
    const [msg, setMsg] = useState("");



    let onSubmit = async (e) => {
        // e.preventDefault();
        try {
            let res = await fetch("http://13.234.216.30:8080/forgotpasswordapi/", {
                method: "POST",
                body: JSON.stringify({
                    email:email,
                    password: createPassword,
                    c_password: confirmPassword
                }),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            let resJson = await res.json();
            if (res.status === 201) {
               // localStorage.setItem("registrationmail", email);
              navigate("/");
            } else {
                setMsg(resJson.msg||resJson.error||resJson.message)
                console.log(res)
            }
        } catch (err) {
            setMsg("Something wents wrong");
            console.log(err);
        }
    };


    return (
     <>
        <Header />  
        <div className='login-reg-wrapper h-100 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={9} lg={7} xl={5} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" />
                            <p class="lead text-center">Create New Password!</p>
                            <Form onSubmit={handleSubmit(onSubmit)}>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <input name="setpassword" type="password" {...register('setpassword')} placeholder='Enter New Password' onChange={(e) => setCreatePassword(e.target.value)} value={createPassword} maxlength="15" className={`form-control ${errors.setpassword ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.setpassword?.message}</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <input name="confirmpassword" type="password" {...register('confirmpassword')} placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} maxlength="15" className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.confirmpassword?.message}</div>
                                    <span style={{color:'red'}}>{msg}</span>
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

export default ResetPassword