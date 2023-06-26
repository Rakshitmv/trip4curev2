import React,{useState} from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Menu from './Nav/Menu';
import "./UserProfilePage.css";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';


const UserProfilePage = () => {

    return (
        <>
            <Header />
            <section className="py-2 " style={{ height: '100vh' }}>
                 <Row>
                    <div className='col-md-9 mx-auto mt-5 text-center '>
                        <h2 className='view-destination-main-heading'>User Profile</h2>
                        {/* <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p> */}
                    </div>    
               </Row>
            <MDBContainer className="py-5">
              {/* <MDBRow>
                <MDBCol>
                  <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                    <MDBBreadcrumbItem>
                      <a href='#'>Home</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                      <a href="#">User</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                  </MDBBreadcrumb>
                </MDBCol>
              </MDBRow> */}

              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '130px' }}
                        fluid />
                      <p className="text-muted mb-1">Full Stack Developer</p>
                      <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                   
                    </MDBCardBody>
                  </MDBCard>

                 
                </MDBCol>
                <MDBCol lg="8">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Full Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">example@example.com</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Set Password</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">* * *</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Confirm Password</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">* * * *</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                    
                    </MDBCardBody>
                  </MDBCard>

         
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </section>
            <Footer />
        </>  
    
  )
}

export default UserProfilePage















// const validationSchema = Yup.object().shape({
//         firstname: Yup.string()
//             .required('First name is required')
//             .min(2),
//         lastname: Yup.string()
//             .required('Last name is required')
//             .min(2),
//         country: Yup.string()
//             .required('Country name is required')
//             .min(2),
//         city: Yup.string()
//             .required('City name is required')
//             .min(2),
//         year: Yup.number()
//             .required('Establishment year is required'),
//         contactnumber: Yup.string()
//             .required('Contact number is required')
//             .min(5),
//         email: Yup.string()
//             .required('Email is required')
//             .email('Email is invalid'),
//         massege: Yup.string()
//             .required('Message name is required')
//             .min(2),
//     });

//     const [userInput1, setUserInput1] = useState("");
//     const [userInput2, setUserInput2] = useState("");
//     const [userInput3, setUserInput3] = useState("");
//     const [userInput4, setUserInput4] = useState("");
//     const [userInput5, setUserInput5] = useState("");
//     const handleInput1 = (e) => {
//         const formattedNumber = formatNumber(e.target.value);
//         setUserInput1(formattedNumber);
//     };
//     const handleInput2 = (e) => {
//         const formattedNumber = formatNumber(e.target.value);
//         setUserInput2(formattedNumber);
//     };

//     const handleInput3 = (e) => {
//         const formattedNumber = formatNumber(e.target.value);
//         setUserInput3(formattedNumber);
//     };

//     const handleInput4 = (e) => {
//         const formattedNumber = OnlyNumber(e.target.value);
//         setUserInput4(formattedNumber);
//     };

//     const handleInput5 = (e) => {
//         const formattedNumber = NotAlph(e.target.value);
//         setUserInput5(formattedNumber);
//     };



//     const formatNumber = (value) => {
//         return value.replace(/[^A-Za-z]/ig, "")
//     }

//     const OnlyNumber = (value) => {
//         return value.replace(/[^0-9]/ig, "")
//     }


//     const NotAlph = (value) => {
//         return value.replace(/[^0-9]/ig, "")
//     }

//     const formOptions = { resolver: yupResolver(validationSchema) };

//     // get functions to build form with useForm() hook
//     const { register, handleSubmit, reset, formState } = useForm(formOptions);
//     const { errors } = formState;

//     function onSubmit(data) {

//         return false;
//     }




//after return


           {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
          <Link className='nav-link' to={'/user-sign-in'}>User Sign In</Link>
            <Link className='nav-link' to={'/hospital-sign-in'}>Hospital Sign In</Link>
          <Link className='btn' style={{ backgroundColor: '#b8353b', color: 'white' }} to={'/contact-us' } >Contact Us</Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar expand="lg" className='nav-grad navbar-light mainmenu-nav navbar navbar-expand-lg classic transparent'>
            <Container className='position-relative'>
              <Link to={'/'}><Navbar.Brand className='fw-bolder' to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`}  alt="" /></Navbar.Brand> </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Menu />
            </Container>
          </Navbar> */}
            {/* <Header />       
           <div className='login-reg-wrapper h-70 d-flex flex-column'>
            <Container className='my-auto'>
                <Row>
                    <Col md={7} lg={8} xl={6} className="mx-auto">
                        <div className='bg-white shadow-md rounded p-4 px-sm-5 mt-4'>
                            {/* <div className="logo"><Link className="d-flex justify-content-center fw-bolder" to={'/'} title=""> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} height={130} width={100} /></Link> </div>
                            <hr class="mx-n4 mx-sm-n5" /> */}
                            {/* <p class="lead text-center">User Profile </p>
                            <Form onSubmit={handleSubmit(onSubmit)}> */}
                                {/* <div className='field1-2'>
                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Label>Business Collabration</Form.Label>
                                        <input name="firstname" type="text" {...register('business')} onChange={(e) => handleInput1(e)} value={userInput1} placeholder='Business Collabration' className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.firstname?.message}</div>
                                    </Form.Group>
                                </div><br></br> */}
                    
                          {/* <Form.Group className="mb-3" controlId="fullName">
                              <Form.Label>First Name</Form.Label>
                              <input name="firstname" type="text" {...register('firstname')} onChange={(e) => handleInput1(e)} value={userInput1} placeholder='Enter first name' className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} />
                              <div className="invalid-feedback">{errors.firstname?.message}</div>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="fullName">
                              <Form.Label>Last Name</Form.Label>
                              <input name="lastname" type="text" {...register('lastname')} placeholder='Enter last name' onChange={(e) => handleInput2(e)} value={userInput2} className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} />
                              <div className="invalid-feedback">{errors.lastname?.message}</div>
                          </Form.Group>
                      
                      
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email</Form.Label>
                              <input name="email" type="text" {...register('email')} placeholder='Enter email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                              <div className="invalid-feedback">{errors.email?.message}</div>
                          </Form.Group>
                
                             
                          <Form.Group className="mb-3" controlId="fullName">
                              <Form.Label>Password</Form.Label>
                              <input name="country" type="text" {...register('country')} maxLength={'25'} onChange={(e) => handleInput3(e)} value={userInput3} placeholder='Enter country name' className={`form-control ${errors.country ? 'is-invalid' : ''}`} />
                              <div className="invalid-feedback">{errors.country?.message}</div>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>New Password</Form.Label>
                              <input name="city" type="text" {...register('city')} maxLength={'25'} onChange={(e) => handleInput4(e)} value={userInput4} placeholder='Enter city name' className={`form-control ${errors.city ? 'is-invalid' : ''}`} />
                              <div className="invalid-feedback">{errors.city?.message}</div>
                          </Form.Group> */}
                
                

                                {/* <div className='d-grid my-4'>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div> */}
                            {/* </Form>

                        </div>
                    </Col>
                </Row>
            </Container>

            {/* <Container fluid className='py-3'>
                <p className="text-center text-2 text-muted mb-0">Copyright © 2023 <Link to={'/'}>trip4cure</Link>. All Rights Reserved.</p>
            </Container> */}
        {/* </div>

          <Footer /> */}
        // {/* </> */} */} */}