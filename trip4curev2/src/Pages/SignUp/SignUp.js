import React, {useState} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import '../SignIn/SignIn.css'

function SignUp() {

    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    const errors = {};

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!firstName.match(nameRegex)) {
      errors.firstName = 'Invalid first name';
    }

    if (!lastName.match(nameRegex)) {
      errors.lastName = 'Invalid last name';
    }

    if (!email.match(emailRegex)) {
      errors.email = 'Invalid email address';
    }

    if (!password.match(passwordRegex)) {
      errors.password =
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can proceed with form submission or further actions
      console.log('Form is valid:', formData);
    } else {
      // Form is invalid, display error messages
      console.log('Form is invalid:', errors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    



  return (
    <div className='login-reg-wrapper h-100 d-flex flex-column'> 
        <Container className='my-auto'>
            <Row>
                <Col md={9} lg={7} xl={5} className="mx-auto">
                    <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                        <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img  src={`${process.env.PUBLIC_URL}/images/logo.png`}height={130} width={100}/></Link> </div>
                        <hr class="mx-n4 mx-sm-n5" />
                        <p class="lead text-center">User Sign Up!</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="fullName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"  name="firstName" value={formData.firstName}
                                      onChange={handleChange} placeholder="Enter Name" />
                                  {errors.firstName && <span>{errors.firstName}</span>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="fullName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"  name="lastName"  value={formData.lastName}
                                      onChange={handleChange} placeholder="Enter Name" />
                                   {errors.lastName && <span>{errors.lastName}</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email"  value={formData.email}
                                      onChange={handleChange} placeholder="Enter email" />
                                  {errors.email && <span>{errors.email}</span>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Set Password</Form.Label>
                                <Form.Control type="password"    name="password"  value={formData.password}
                                      onChange={handleChange} placeholder="Set Password" />
                                    {errors.password && <span>{errors.password}</span>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="confirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password"  name="confirmPassword" value={formData.confirmPassword}
                                      onChange={handleChange} placeholder="Confirm Password" /> 
                                  {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
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