import React, { useState, useEffect } from 'react'
import '../ViewMedicalCenterInfoPages/MedicalCenterInfoPages.css'
import { Col, Container, Form, Row, Card, Tab, Nav } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Slider from 'react-slick';
import Select from 'react-select'
import { useCallback } from 'react';
import ScrollToTop from '../../Utilies/ScrollTop';
import './MedicalCenterInfo.css'
// import MedicalMenuBarServices from './MedicalCenterMenuBar/MedicalMenuBarServices';



const medicalSlideShow = {
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 8
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 6
      }
    }
  ]
};

const speciality = [
  { value: 'Addiction Treatment', label: 'Addiction Treatment' },
  { value: 'Aesthetics', label: 'Aesthetics' },
  { value: 'Anesthesiology', label: 'Anesthesiology' },
  { value: 'Bariatric Surgery', label: 'Bariatric Surgery' },
  { value: 'Bone Marrow Transplant', label: 'Bone Marrow Transplant' },
  { value: 'Cancer Treatment', label: 'Cancer Treatment' },
  { value: 'Cardiology', label: 'Cardiology' },
  { value: 'Cosmetic Surgery', label: 'Cosmetic Surgery' },
  { value: 'Dental', label: 'Dental' },
  { value: 'Dermatology', label: 'Dermatology' },
  { value: 'Dialysis', label: 'Dialysis' },
  { value: 'Ear Nose And Throat', label: 'Ear Nose And Throat' },
  { value: 'Endocrinology', label: 'Endocrinology' },
  { value: 'Eye Surgery', label: 'Eye Surgery' },
  { value: 'Fertility Treatments', label: 'Fertility Treatments' },
  { value: 'Gastroenterology', label: 'Gastroenterology' },
  { value: 'General Surgery', label: 'General Surgery' },
  { value: 'Hair Transplant', label: 'Hair Transplant' },
  { value: 'Hematology', label: 'Hematology' },
  { value: 'Imaging', label: 'Imaging' },
  { value: 'Medical Check Ups', label: 'Medical Check Ups' },
  { value: 'Nephrology', label: 'Nephrology' },
  { value: 'Neurology', label: 'Neurology' },
  { value: 'Neuro Surgery', label: 'Neuro Surgery' },
  { value: 'Ob Gyn', label: 'Ob Gyn' },
  { value: 'Orthopedics', label: 'Orthopedics' },
  { value: 'Pediatrics', label: 'Pediatrics' },
  { value: 'Rehabilitation', label: 'Rehabilitation' },
  { value: 'Stem', label: 'Stem' },
  { value: 'Thyroid', label: 'Thyroid' },
  { value: 'Urology', label: 'Urology' },
  { value: 'Vascular Surgery', label: 'Vascular Surgery' },

]



const images = [
  { src: process.env.PUBLIC_URL + '/images/slide_01.jpg', alt: 'Image 1' },
  { src: process.env.PUBLIC_URL + '/images/slide_02.jpg', alt: 'Image 2' },
  { src: process.env.PUBLIC_URL + '/images/slide_03.jpg', alt: 'Image 3' },
  { src: process.env.PUBLIC_URL + '/images/slide_04.jpg', alt: 'Image 4' },
  { src: process.env.PUBLIC_URL + '/images/slide_05.jpg', alt: 'Image 5' },
];

const MedicalCenterInfo = () => {

  const { id } = useParams()

  const [hospital, setHospital] = useState({})

  const [services, setServices] = useState([])
  const [doctors, setDoctors] = useState([])

  const [specialty, setSpecialty] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    const fetchHospitalDetails = async () => {
      try {
        const response = await fetch('http://13.234.216.30:8080/hospital_details/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ hospital_id: id }),
        });

        const data = await response.json();
        const hospitalData = data.Hospital
        const serviceData = data.Hospital_Services
        const doctorData = data.doctor
        setHospital(() => ({ ...hospitalData[0] }))
        setServices(() => [...serviceData])
        setDoctors(() => [...doctorData])
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchHospitalDetails();
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage((prevImage) => {
      if (prevImage === image) {
        return null;
      } else {
        return image;
      }
    });
  };

  const getImageSize = (image) => {
    return selectedImage === image ? { width: '400px', height: '400px' } : { width: '100px', height: '70px' };
  };

  const handleSearch = useCallback(e => {
    e.preventDefault()
    let temp = doctors.filter(doctor => doctor.speciality === specialty.value)
    console.log(temp)
  }, [specialty])



  return (
    <>

      <Header />
      <section id='medical-center-info-page_1' >
        <Container>
          <Row>
            <div>
              <div className='col-md-4 mt-5 '>
                <h1>{hospital.hospital_name}</h1>
              </div>
              <div className='col-md-8 mt-5 medical-img-intro'>
                <div className='row'>
                  <div className='col-6'>
                    <img className='mt-3 me-4 img-fluid' style={{ width: '100%' }} src={hospital.profile_image ? 'http://13.234.216.30:8080' + hospital.profile_image : ''}/>

                  </div>
                  <div className='col-6'>
                    <h4 className='mt-3'>Location</h4>
                    <h4 className='mt-3'>{hospital.hospital_city}, {hospital.hospital_country}</h4>
                    <a href={`tel:${hospital.contact_number}`} class="line-primary-btn  mt-3 px-4 py-2 btn btn-outline-primary menu-bar-info">Contact Hospital</a>
                  </div>


                </div>

              </div>
            </div>

          </Row>
          {/*<Row>
            
          <div className=' col-xl-6 mt-5'>
          <Slider {...medicalSlideShow} className='centerInfoThumbnails'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={getImageSize(image)}
              onClick={() => handleImageClick(image)}
              className= 'img-gallery-slider'
            />
          ))}
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={getImageSize(image)}
              onClick={() => handleImageClick(image)}
              className= 'img-gallery-slider'
            />
          ))}
          </Slider>
          </div>
          </Row> */}
          {/* <Row>
            <div className='col-md-4 mx-auto'>
              
                <div className='medicalslide position-relative'>
                  <img  className='medicalslideheight' src={`${process.env.PUBLIC_URL}/images/slide_01.jpg`} alt=""></img>
                </div>
              </Slider>
            </div>
          </Row> */}
          <Row>

            <div className=' col-md-12 mt-5 mx-auto img-gallery'>
              {/* <Slider {...medicalSlideShow}> */}
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  style={getImageSize(image)}
                  onClick={() => handleImageClick(image)}
                  className='img-gallery-slider'
                />
              ))}
              {/* <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img> */}
              {/* </Slider> */}
            </div>

          </Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="overview">
            <Row className='mt-4'>
              <Col md="8">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="overview" className="line-primary-btn px-4 py-2 btn btn-outline-primary nav-tabs round-left medical-center-info-text" >Overview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="services" className="line-primary-btn px-4 py-2 btn btn-outline-primary nav-tabs nav-tab medical-center-info-text">Services</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="doctors" className="line-primary-btn px-4 py-2 btn btn-outline-primary nav-tabs round-right medical-center-info-text">Doctors</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={7}>
                <Tab.Content className='my-3'>
                  <Tab.Pane eventKey="overview">
                    <h1 className='mb-3 '>{hospital.hospital_name} - Overview</h1>
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="services">
                    <h1>Services</h1>
                    {
                      services.map(service =>
                        <React.Fragment key={service.id}>
                          <h5 className='fw-bold'>{service.service_name}</h5>
                          <p>
                            {service.service_description}
                          </p>
                        </React.Fragment>
                      )
                    }
                  </Tab.Pane>
                  <Tab.Pane eventKey="doctors">
                    <div className='mb-4'>
                      <Form onSubmit={handleSearch}>
                        <Container>
                          <Row className='justify-content-between align-items-start'>
                            <Col md={7}>
                              <Form.Group controlId="formBasicEmail">
                                <Form.Label><p className='font-style'>Choose Speciality</p></Form.Label>
                                <Select className="form-control-filter" name='speciality' required={true} onChange={value => setSpecialty(value)} options={speciality} />
                              </Form.Group>
                            </Col>
                            <Col md="4">
                              <button type="submit" className="btn w-60 search-big-btn" style={{ backgroundColor: '#b8353b', color: 'white', height: '60px' }}><i class="fa fa-search"> </i> Search</button>
                            </Col>
                          </Row>
                        </Container>
                      </Form>
                    </div>

                    {/* {
                  doctors.map(doctor =>
                    <Col xs={6}  key={doctor.id}>
                    <div className='medical-doctor-menu-card-1'  >
                    <img src={`${process.env.PUBLIC_URL}/images/mc3.png`} style={{ width: '130px', height: '100px' }} className="" alt="" />
                    <div className='flex-grow-1'>
                      <h4>{doctor.name}</h4>
                      <h6>{doctor.speciality}</h6>
                    </div>
                  </div>  
                    </Col>
                  )
                } */}



                    <Row>
                      <Col className='col-6'>
                        <div class="cardc py-3">

                          <div class="justify-content-start px-3">
                            <Row>
                              <Col className='col-4'>
                                <div class="image-bg mr-3">
                                  <img class="user-img fit-image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div></Col>
                              <Col className='col-8'>
                                <div class="text-left">
                                  <h5 className='d-header'>Dr. Kiera Hill</h5>
                                  <p className='d-text'>Director of the Dr Paloma Institute</p>

                                </div></Col>

                            </Row>
                          </div>
                        </div>
                        <div class="cardc py-3">

                          <div class="justify-content-start px-3">
                            <Row>
                              <Col className='col-4'>
                                <div class="image-bg mr-3">
                                  <img class="user-img fit-image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div></Col>
                              <Col className='col-8'>
                                <div class="text-left">
                                  <h5 className='d-header'>Dr. Kiera Hill</h5>
                                  <p className='d-text'>Director of the Dr Paloma Institute</p>

                                </div></Col>

                            </Row>
                          </div>
                        </div>

                        <div class="cardc py-3">

                          <div class="justify-content-start px-3">
                            <Row>
                              <Col className='col-4'>
                                <div class="image-bg mr-3">
                                  <img class="user-img fit-image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div></Col>
                              <Col className='col-8'>
                                <div class="text-left">
                                  <h5 className='d-header'>Dr. Kiera Hill</h5>
                                  <p className='d-text'>Director of the Dr Paloma Institute</p>

                                </div></Col>

                            </Row>
                          </div>
                        </div>

                        <div class="cardc py-3">

                          <div class="justify-content-start px-3">
                            <Row>
                              <Col className='col-4'>
                                <div class="image-bg mr-3">
                                  <img class="user-img fit-image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div></Col>
                              <Col className='col-8'>
                                <div class="text-left">
                                  <h5 className='d-header'>Dr. Kiera Hill</h5>
                                  <p className='d-text'>Director of the Dr Paloma Institute</p>

                                </div></Col>

                            </Row>
                          </div>
                        </div>
                      </Col>
                      <Col className='col-6'>
                        <div class="cardc py-3">

                          <div class="justify-content-start px-3">
                            <Row>
                              <Col className='col-4'>
                                <div class="image-bg mr-3">
                                  <img class="user-round-img  fit-image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div></Col>
                              <Col className='col-8'>
                                <div class="text-left">
                                  <h5 className='d-header'>Dr. Kiera Hill</h5>
                                  <p className='d-text'>Director of the Dr Paloma Institute</p>

                                </div></Col>

                            </Row>
                          </div>
                        </div>
                        <div class="cardc py-3">

                          <div class="justify-content-start px-3">
                            <Row>
                              <Col className='col-4'>
                                <div class="image-bg mr-3">
                                  <img class="user-round-img  fit-image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div></Col>
                              <Col className='col-8'>
                                <div class="text-left">
                                  <h5 className='d-header'>Dr. Kiera Hill</h5>
                                  <p className='d-text'>Director of the Dr Paloma Institute</p>

                                </div></Col>

                            </Row>
                          </div>
                        </div>

                        <div class="cardc py-3">

                          <div class="justify-content-start px-3">
                            <Row>
                              <Col className='col-4'>
                                <div class="image-bg mr-3">
                                  <img class="user-round-img  fit-image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div></Col>
                              <Col className='col-8'>
                                <div class="text-left">
                                  <h5 className='d-header'>Dr. Kiera Hill</h5>
                                  <p className='d-text'>Director of the Dr Paloma Institute</p>

                                </div></Col>

                            </Row>
                          </div>
                        </div>

                        <div class="cardc py-3">

                          <div class="justify-content-start px-3">
                            <Row>
                              <Col className='col-4'>
                                <div class="image-bg mr-3">
                                  <img class="user-round-img  fit-image" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div></Col>
                              <Col className='col-8'>
                                <div class="text-left">
                                  <h5 className='d-header'>Dr. Kiera Hill</h5>
                                  <p className='d-text'>Director of the Dr Paloma Institute</p>

                                </div></Col>

                            </Row>
                          </div>
                        </div>

                      </Col>
                    </Row>



                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

        </Container>
      </section>
      <Footer />
    </>
  )
}

export default MedicalCenterInfo