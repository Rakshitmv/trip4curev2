import React from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import './HospitalUserProfile.css';
import { Link} from "react-router-dom";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
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


const HospitalUserProfile = () => {
  return (
      <>
          <Header />
          <section className=''>
                <Row>
                    <div className='col-md-9 mx-auto mt-5 text-center '>
                        <h2 className='view-destination-main-heading'>Hospital Profile</h2>
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
                        style={{ width: '140px' }}
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
                          <MDBCardText>First Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted"> Smith</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Last Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">Johnatan</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Mobile</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Address</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                        </MDBCol>
                      </MDBRow>
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

export default HospitalUserProfile