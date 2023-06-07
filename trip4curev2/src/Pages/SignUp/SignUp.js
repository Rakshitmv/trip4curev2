import React, {useState} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css'
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();

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

    const [firstname, setfirstname] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setfirstname(formattedNumber);
    };

    const handleInput1 = (e) => {
        const formattedNumber = formatNumber1(e.target.value);
        setLastName(formattedNumber);
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

    // function onSubmit(data) {

    //     return false;
    // }


    let onSubmit = async (e) => {
        // e.preventDefault();
        try {
            let res = await fetch("http://13.234.216.30:8080/register/", {
                method: "POST",
                body: JSON.stringify({
                    first_name: firstname,
                    last_name: LastName,
                    email: email,
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
                localStorage.setItem("registrationmail", email);
                navigate("/verify-account/user");
            } else {
                setMsg(resJson.msg||resJson.error||resJson.message)
                console.log(res)
            }
        } catch (err) {
            setMsg("Something wents wrong")
            console.log(err);
        }
    };


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
                                    <input name="firstname" type="text" {...register('firstname')} onChange={(e) => handleInput(e)} value={firstname} placeholder='Enter first name' className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.firstname?.message}</div>

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label>Last Name</Form.Label>
                                    <input name="lastname" type="text" {...register('lastname')} placeholder='Enter last name' onChange={(e) => handleInput1(e)} value={LastName} className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.lastname?.message}</div>

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <input name="email" type="text" {...register('email')} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Set Password</Form.Label>
                                    <input name="setpassword" type="password" {...register('setpassword')} placeholder='Enter Password' onChange={(e) => setCreatePassword(e.target.value)} value={createPassword} className={`form-control ${errors.setpassword ? 'is-invalid' : ''}`} maxlength="15" />
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