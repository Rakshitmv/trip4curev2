import React, { useState } from 'react'
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



function HospitalSignUp() {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        hospitalname: Yup.string()
            .required('First name is required')
            .min(2),
        country: Yup.string()
            .required('Country name is required')
            .min(2),
        city: Yup.string()
            .required('City name is required')
            .min(2),
        year: Yup.string()
            .required('Establishment year is required'),
        contactnumber: Yup.string()
            .required('Contact number year is required')
            .min(5),
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
    const [country, setcountry] = useState("");
    const [city, setcity] = useState("");
    const [email, setEmail] = useState("");
    const [year, setyear] = useState("");
    const [contactnumber, setcontactnumber] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleInput1 = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setfirstname(formattedNumber);
    };
    const handleInput2 = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setcountry(formattedNumber);
    };

    const handleInput3 = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setcity(formattedNumber);
    };

    const handleInput4 = (e) => {
        const formattedNumber = OnlyNumber(e.target.value);
        setyear(formattedNumber);
    };

    const handleInput5 = (e) => {
        const formattedNumber = NotAlph(e.target.value);
        setcontactnumber(formattedNumber);
    };



    const formatNumber = (value) => {
        return value.replace(/[^A-Za-z]/ig, "")
    }

    const OnlyNumber = (value) => {
        return value.replace(/[^0-9]/ig, "")
    }


    const NotAlph = (value) => {
        return value.replace(/[^0-9]/ig, "")
    }

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;


    const [msg, setMsg] = useState("");
    let onSubmit = async (e) => {
        try {
            let res = await fetch("http://13.234.216.30:8080/hospital_register/", {
                method: "POST",
                body: JSON.stringify({
                    hospital_name: firstname,
                    hospital_country: country,
                    email: email,
                    hospital_city: city,
                    contact_number: confirmPassword,
                    establishment_year: year,
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
                navigate("/verify-account/hospital");
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
        <>
            <Header />
            <div className='login-reg-wrapper h-90 d-flex flex-column'>
                <Container className='my-auto'>
                    <Row>
                        <Col md={9} lg={7} xl={5} className="mx-auto">
                            <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                                {/* <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                                <hr class="mx-n4 mx-sm-n5" /> */}
                                <p class="lead text-center">Hospital Sign Up!</p>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Hospital Name</Form.Label>
                                        <input name="hospitalname" type="text" {...register('hospitalname')} maxLength={'25'} onChange={(e) => handleInput1(e)} value={firstname} placeholder='Enter hospital name' className={`form-control ${errors.hospitalname ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.hospitalname?.message}</div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <input name="email" type="text" {...register('email')} onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.email?.message}</div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Country</Form.Label>
                                        <input name="country" type="text" {...register('country')} maxLength={'25'} onChange={(e) => handleInput2(e)} value={country} placeholder='Enter country name' className={`form-control ${errors.country ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.country?.message}</div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>City</Form.Label>
                                        <input name="city" type="text" {...register('city')} maxLength={'25'} onChange={(e) => handleInput3(e)} value={city} placeholder='Enter city name' className={`form-control ${errors.city ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.city?.message}</div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Establishment Year</Form.Label>
                                        <input name="year" type="text" {...register('year')} maxLength={'4'} onChange={(e) => handleInput4(e)} value={year} placeholder='Enter establishment year' className={`form-control ${errors.year ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.year?.message}</div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contact Number</Form.Label>
                                        <input name="contactnumber" type="text" {...register('contactnumber')} maxLength={'20'} onChange={(e) => handleInput5(e)} value={contactnumber} placeholder='Enter contact number' className={`form-control ${errors.contactnumber ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.contactnumber?.message}</div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Set Password</Form.Label>
                                        <input name="setpassword" type="password" {...register('setpassword')} onChange={(e) => setCreatePassword(e.target.value)} value={createPassword} placeholder='Enter Password' className={`form-control ${errors.setpassword ? 'is-invalid' : ''}`} maxlength="20" />
                                        <div className="invalid-feedback">{errors.setpassword?.message}</div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="confirmPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <input name="confirmpassword" type="password" {...register('confirmpassword')} onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder='Confirm Password' maxlength="15" className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.confirmpassword?.message}</div>
                                        <span style={{color:'red'}}>{msg}</span>
                                    </Form.Group>

                                    <div className='d-grid my-4'>
                                        <Button variant="primary" type="submit">
                                            Sign Up
                                        </Button>
                                    </div>
                                </Form>
                                <p class="text-muted text-center mb-2">Already have an account? <Link to={'/hospital-sign-in'}>Log In</Link></p>
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

export default HospitalSignUp