import React , { useEffect, useState }from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css'
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate,useParams } from "react-router-dom";
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'


function VerifyOtp() {

    const params = useParams();

    useEffect(() => {
        const saved = localStorage.getItem("verifymail");
        console.log('email>>>',saved)
        console.log(">>>>>>>>>>>>>>",params.name)
        setemail(saved);
    });
    

    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        otp: Yup.number()
            .required('OTP is required')

    });

    const [otp, setotp] = useState("");
    const [email, setemail] = useState("");
    const [msg, setMsg] = useState("");
    const handleInput = (e) => {
        const formattedNumber = formatNumber(e.target.value);
        setotp(formattedNumber);
    };

    const formatNumber = (value) => {
        return value.replace(/[^0-9]/ig ,"")
    }

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    let onSubmit = async (e) => {
        try {
            let res = await fetch("http://13.234.216.30:8080/forgotpasswordapi/", {
              method: "POST",
              body: JSON.stringify({
                email: email,
                user_otp:otp
              }),
              headers: {
                  "Content-Type": 'application/json',
                  "Accept": 'application/json'
              }
            });
            let resJson = await res.json();
            if (res.status === 201) {
                navigate("/reset-password");
            } else {
                setMsg(resJson.msg||resJson.error||resJson.message)
            }
          } catch (err) {
            setMsg("Something wents wrong")
            console.log(err);
          }
    }


    return (
     <>
        <Header />
        <div className='login-reg-wrapper h-100 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={9} lg={7} xl={7} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            {/* <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" /> */}
                            <p class="lead text-center">Please Enter One-Time Password to verify your account</p>
                            <p class="lead text-center" style={{fontSize:"1rem"}}>A one time password has been sent to your email</p>
                            <Form className='p-4 px-sm-5 mx-5' onSubmit={handleSubmit(onSubmit)}>

                                <Form.Group className="mx-3" controlId="formBasicPassword">
                         
                                <input name="otp" type="text" {...register('otp')} placeholder='Enter OTP' onChange={(e) => handleInput(e)} value={otp} className={`form-control ${errors.otp ? 'is-invalid' : ''}`}  maxlength="6"/>
                                    <div className="invalid-feedback">{errors.otp?.message}</div>
                                    <span style={{color:'red'}}>{msg}</span>
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

            {/* <Container fluid className='py-3'>
                <p className="text-center text-2 text-muted mb-0">Copyright © 2023 <Link to={''}>trip4cure</Link>. All Rights Reserved.</p>
            </Container> */}
        </div>
        <Footer />
     </>   
    )
}

export default VerifyOtp