import React,{useState} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css' 
import '../ContactUS/ContactUS.css'
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

const ContactUS = () => {
    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required('First name is required')
            .min(2),
        lastname: Yup.string()
            .required('Last name is required')
            .min(2),
        country: Yup.string()
            .required('Country name is required')
            .min(2),
        city: Yup.string()
            .required('City name is required')
            .min(2),
        year: Yup.number()
            .required('Establishment year is required'),
        contactnumber: Yup.string()
            .required('Contact number is required')
            .min(5),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        massege: Yup.string()
            .required('Message name is required')
            .min(2),
    });

    const [userInput1, setUserInput1] = useState("");
    const [userInput2, setUserInput2] = useState("");
    const [userInput3, setUserInput3] = useState("");
    const [userInput4, setUserInput4] = useState("");
    const [userInput5, setUserInput5] = useState("");
    const handleInput1 = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setUserInput1(formattedNumber);
    };
    const handleInput2 = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setUserInput2(formattedNumber);
    };

    const handleInput3 = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setUserInput3(formattedNumber);
    };

    const handleInput4 = (e) => {
        const formattedNumber = OnlyNumber(e.target.value);
        setUserInput4(formattedNumber);
    };

    const handleInput5 = (e) => {
        const formattedNumber = NotAlph(e.target.value);
        setUserInput5(formattedNumber);
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

    function onSubmit(data) {

        return false;
    }
    return (
     <>  
        <Header />       
        <div className='login-reg-wrapper h-70 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={9} lg={8} xl={6} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            {/* <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" /> */}
                            <p class="lead text-center">Contact us</p>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                {/* <div className='field1-2'>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Business Collabration</Form.Label>
                                        <input name="firstname" type="text" {...register('business')} onChange={(e) => handleInput1(e)} value={userInput1} placeholder='Business Collabration' className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.firstname?.message}</div>
                                    </Form.Group>
                                </div><br></br> */}
                                <div className='field1-2'>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>First Name</Form.Label>
                                        <input name="firstname" type="text" {...register('firstname')} onChange={(e) => handleInput1(e)} value={userInput1} placeholder='Enter first name' className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.firstname?.message}</div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Last Name</Form.Label>
                                        <input name="lastname" type="text" {...register('lastname')} placeholder='Enter last name' onChange={(e) => handleInput2(e)} value={userInput2} className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.lastname?.message}</div>
                                    </Form.Group>
                                </div><br></br>
                                <div className='field1-2'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <input name="email" type="text" {...register('email')} placeholder='Enter email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.email?.message}</div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contact Number</Form.Label>
                                        <input name="contactnumber" type="text" {...register('contactnumber')} maxLength={'20'} onChange={(e) => handleInput5(e)} value={userInput5} placeholder='Enter contact number' className={`form-control ${errors.contactnumber ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.contactnumber?.message}</div>
                                    </Form.Group>
                                </div><br></br>
                                <div className='field1-2'>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Country</Form.Label>
                                        <input name="country" type="text" {...register('country')} maxLength={'25'} onChange={(e) => handleInput3(e)} value={userInput3} placeholder='Enter country name' className={`form-control ${errors.country ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.country?.message}</div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>City</Form.Label>
                                        <input name="city" type="text" {...register('city')} maxLength={'25'} onChange={(e) => handleInput4(e)} value={userInput4} placeholder='Enter city name' className={`form-control ${errors.city ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.city?.message}</div>
                                    </Form.Group>
                                </div><br></br>
                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className='' >Message</Form.Label>
                                    <textarea rows={'7'} name="massege" type="text" {...register('massege')} placeholder='Enter Message' className={`form-control ${errors.massege ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.massege?.message}</div>

                                </Form.Group>

                                <div className='d-grid my-4'>
                                    <Button variant="primary" type="submit">
                                        Submit
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

export default ContactUS