import React , { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignIn/SignIn.css'



function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    }; 



    const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
    };
    

    const validateEmail = (email) => {
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

    
      const validatePassword = (password) => {
    // Password validation using regex
    // Example: Password should contain at least 8 characters with at least one uppercase, one lowercase, one number, and one special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
    };
    


  return (
    <div className='login-reg-wrapper h-100 d-flex flex-column'> 
        <Container className='my-auto'>
            <Row>
                <Col md={9} lg={7} xl={5} className="mx-auto">
                    <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                        <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img  src={`${process.env.PUBLIC_URL}/images/logo.png`}height={130} width={100}/></Link> </div>
                        <hr class="mx-n4 mx-sm-n5" />
                        <p class="lead text-center">Login to User account</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control type="email" onChange={handleEmailChange}  value={email} placeholder="Enter email" />
                                    {isValidEmail ? (
                                        <span style={{ color: 'green' }}>Email is valid</span>
                                    ) : (
                                        <span style={{ color: 'red' }}>Email is invalid</span>
                                    )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"     value={password}
                                     onChange={handlePasswordChange} placeholder="Password" />
                                    {isValidPassword ? (
                                            <span style={{ color: 'green' }}>Password is valid</span>
                                        ) : (
                                            <span style={{ color: 'red' }}>Password is invalid</span>
                                        )}
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
                        <p class="text-muted text-center mb-2">Don't have an account? <Link to={'/sign-up'}>Sign Up</Link></p>
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

export default SignIn;