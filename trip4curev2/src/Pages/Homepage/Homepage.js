import Select from 'react-select';
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Topbar/Topbar";
import "./Homepage.css";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ViewSpeciality from '../ViewSpeciality/ViewSpeciality';
import ViewMedicalCenter from '../ViewMedicalCenter/ViewMedicalCenter';
import MedicalCenterInfoPages_1 from '../ViewMedicalCenterInfoPages/MedicalCenterInfoPages_1';







const speciality = [
  { value: 'Cancer Treatment', label: 'Cancer Treatment' },
  { value: 'Cardiac Surgery', label: 'Cardiac Surgery' },
  { value: 'Cosemtic Surgery', label: 'Cosemtic Surgery' },
  { value: 'Fertility Treatment', label: 'Fertility Treatment' },
  { value: 'Neurology', label: 'Neurology' },
  { value: 'Orthopedic Surgery', label: 'Orthopedic Surgery' }

]

const country = [
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Germany', label: 'Germany' },
  { value: 'India', label: 'India' },
  { value: 'Malaysia', label: 'Malaysia' },
  { value: 'Mexico', label: 'Mexico' },
  { value: 'Spain', label: 'Spain' }
]


const fmc = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '20px',
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};

const mtg = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};

const testimonial = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};

const afterbefore = {
  dots: false,
  autoplay: true,
  adaptiveHeight: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
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
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};


const fd = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};



const globalProvider = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};


function Homepage() {
  return (
    <>

      <Topbar />
      <Header />
      <section id="section-01" className="home-main-intro " style={{ height: '78vh' }}>
        <Container>
          <Row className="align-items-center">
            <div className="banner-text pb-5 ">
              <h5 className='main-heading'>Wellness & Medical tourism for</h5>
              <h5 className='main-sub-heading-up'>Everyone, Everywhere.</h5>
            </div>


            {/* <Col xl={3} md={4} className="col-6 mb-4 mb-xl-0 pt-3 px-4 bg-white-transparent brtb position-relative rounded-right form-search-item">
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Choose Country</Form.Label>
                    <Select className="form-control-filter" options={country} />
                  </Form.Group>
                  </Col> */}

            <div className="form-search pb-5 ">
              <Form>
                <Container>
                  <Row>
                    <Col xl={3} md={4} className="col-2 pt-1   bg-white-transparent bdrtlb border-right position-relative rounded-left form-search-item">
                      <Form.Group className="pb-0 choose-height" controlId="formBasicEmail">
                        <Form.Label><h5 className='choose-text'>Choose Speciality</h5></Form.Label>
                        <Select className="form-control-filter" options={speciality} />
                      </Form.Group>
                    </Col>&emsp;
                    <Col xl={3} md={4} className="col-2 pt-1 bg-white-transparent brtb position-relative rounded-right form-search-item">
                      <Form.Group className="" controlId="formBasicEmail">
                        <Form.Label><h5 className='choose-text'>Choose Country</h5></Form.Label>
                        <Select className="form-control-filter" options={country} />
                      </Form.Group>
                    </Col>
                    <Col xl="2">
                      <button type="submit" className="btn   w-60  search-big-btn" style={{ backgroundColor: '#b8353b', color: 'white' }}><i class="fa fa-search"></i> Search</button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </div>

            <div className="font-size-lg mt-2 mb-2">Or browse Top Specialties: <Link to={'/view-speciality'} className="red-link">View All Specialties</Link></div>
            <div className="list-inline pb-5 flex-wrap my-n2">
              <div className="list-inline-item py-2">
                <Link to={''} class="card border-0 icon-box link-hover-dark-white">
                  <div class="card-body p-0">
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/images/ic-cancer-treatment.png`} className="normal-state" alt="" />
                      <img src={`${process.env.PUBLIC_URL}/images/ic-cancer-treatment-white.png`} className="hover-state" alt="" />
                    </div>
                    <span class="card-text font-size-md font-weight-semibold mt-2 d-block">
                      Cancer Treatment
                    </span>
                  </div>
                </Link>
              </div>
              <div className="list-inline-item py-2">
                <Link to={''} class="card border-0 icon-box link-hover-dark-white">
                  <div class="card-body p-0">
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/images/ic-cardiac.png`} className="normal-state" alt="" />
                      <img src={`${process.env.PUBLIC_URL}/images/ic-cardiac-white.png`} className="hover-state" alt="" />
                    </div>
                    <span class="card-text font-size-md font-weight-semibold mt-2 d-block">
                      Cardiac Surgery
                    </span>
                  </div>
                </Link>
              </div>
              <div className="list-inline-item py-2">
                <Link to={''} class="card border-0 icon-box link-hover-dark-white">
                  <div class="card-body p-0">
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/images/ic-cosmetic-surgery.png`} className="normal-state" alt="" />
                      <img src={`${process.env.PUBLIC_URL}/images/ic-cosmetic-surgery-white.png`} className="hover-state" alt="" />
                    </div>
                    <span class="card-text font-size-md font-weight-semibold mt-2 d-block">
                      Cosmetic Surgery
                    </span>
                  </div>
                </Link>
              </div>
              <div className="list-inline-item py-2">
                <Link to={''} class="card border-0 icon-box link-hover-dark-white">
                  <div class="card-body p-0">
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/images/ic-fertility.png`} className="normal-state" alt="" />
                      <img src={`${process.env.PUBLIC_URL}/images/ic-fertility-white.png`} className="hover-state" alt="" />
                    </div>
                    <span class="card-text font-size-md font-weight-semibold mt-2 d-block">
                      Fertility Treatment
                    </span>
                  </div>
                </Link>
              </div>
              <div className="list-inline-item py-2">
                <Link to={''} class="card border-0 icon-box link-hover-dark-white">
                  <div class="card-body p-0">
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/images/ic-neurology.png`} className="normal-state" alt="" />
                      <img src={`${process.env.PUBLIC_URL}/images/ic-neurology-white.png`} className="hover-state" alt="" />
                    </div>
                    <span class="card-text font-size-md font-weight-semibold mt-2 d-block">
                      Neurology
                    </span>
                  </div>
                </Link>
              </div>
              <div className="list-inline-item py-2">
                <Link to={''} class="card border-0 icon-box link-hover-dark-white">
                  <div class="card-body p-0">
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/images/ic-cancer-treatment.png`} className="normal-state" alt="" />
                      <img src={`${process.env.PUBLIC_URL}/images/ic-cancer-treatment-white.png`} className="hover-state" alt="" />
                    </div>
                    <span className="card-text font-size-md font-weight-semibold mt-2 d-block ">
                      Cancer Treatment
                    </span>
                  </div>
                </Link>
              </div>
            </div>


          </Row>
        </Container>
      </section>

      <section className='ab-section' style={{ height: '100vh' }}>
        <Container>
          <Row>
            <div className='col-md-7 mx-auto mt-3 mb-3 text-center'>
              <h2 className='main-heading-page'>Our Success Stories...</h2>
              <h5 className='main-sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</h5>
            </div>
          </Row>
          <Row>
            <div className="col-md-11 mx-auto ">

              <Slider {...afterbefore}>

                <div className='ab-image position-relative '>
                  <img className='ab-img-black ad-img' src={`${process.env.PUBLIC_URL}/images/slide_01.jpg`} alt="" />
                  <div className='content'>
                    <h2>Before Knee Replacement</h2>
                  </div>
                </div>
                <div className='ab-image position-relative ' >
                  <img src={`${process.env.PUBLIC_URL}/images/slide_02.jpg`} alt=""  className='ad-img'/>
                  <div className='content'>
                    <h2>After knee replacement <br />Happy after knee</h2>
                  </div>
                </div>
                <div className='ab-image position-relative '>
                  <img src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt="" className='ad-img' />
                  <div className='content'>
                    <h2>In sports injury</h2>
                  </div>
                </div>
                <div className='ab-image position-relative '>
                  <img src={`${process.env.PUBLIC_URL}/images/slide_04.jpg`} alt="" className='ad-img' />
                  <div className='content'>
                    <h2>Recovering after surgery</h2>
                  </div>
                </div>
                <div className='ab-image position-relative '>
                  <img src={`${process.env.PUBLIC_URL}/images/slide_05.jpg`} alt="" className='ad-img' />
                  <div className='content'>
                    <h2>feeling much better now</h2>
                  </div>
                </div>
                <div className='ab-image position-relative '>
                  <img src={`${process.env.PUBLIC_URL}/images/slide_06.jpg`} alt="" className='ad-img' />
                  <div className='content'>
                    <h2>I’m cancer free now</h2>
                  </div>
                </div>
                <div className='ab-image position-relative '>
                  <img src={`${process.env.PUBLIC_URL}/images/slide_07.jpg`} alt="" className='ad-img' />
                  <div className='content'>
                    <h2>Pregnant</h2>
                  </div>
                </div>
                {/* <div className='ab-image position-relative '>
                  <img  src={`${process.env.PUBLIC_URL}/images/slide_08.jpg`} alt="" />
                  <div className='content'>
                    <h2>Knee sucessfull surgery</h2>
                  </div>
                </div> */}
                {/* <div className='ab-image position-relative'>
                  <img  src={`${process.env.PUBLIC_URL}/images/slide_09.jpg`} alt="" className='ad-img'  />
                  <div className='content'>
                    <h2>Old is Gold</h2>
                  </div>
                </div> */}
                {/* <div className='ab-image position-relative'>
                  <img  src={`${process.env.PUBLIC_URL}/images/slide_10.jpg`} alt="" />
                  <div className='content'>
                    <h2>TB</h2>
                  </div>
                </div> */}
                <div className='ab-image position-relative'>
                  <img src={`${process.env.PUBLIC_URL}/images/slide_11.jpg`} alt="" className='ad-img' />
                  <div className='content'>
                    <h2>Cancer free</h2>
                  </div>
                </div>

              </Slider>
            </div>
          </Row>
        </Container>
      </section>

      <section id="section-02" className=" featured-medical-center" style={{ height: '100vh' }}>
        <Container>
          <Row>
            <div className="col-md-7 mx-auto mb-3 mt-3 text-center">
              <h2 className='main-heading-page'>Featured Medical Centers</h2>
              <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
            </div>
          </Row>
          <Row>
            <Slider {...fmc}>
              <Link to={''} className="sliderblock">

                <Card className="text-center" style={{width:"320px",margin:'0 10px'}}>
                  <div className="image-block">
                    <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                  </div>
                  <Card.Body>
                    <Card.Title><h6 className='card-heading'>Galenia Hospital</h6></Card.Title>
                    <Card.Text><h6>Mexico City</h6></Card.Text>
                    <Card.Text className='card-text'>Mexico - 16 Specialties</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to={''} className="sliderblock">
                <Card className="text-center" style={{width:"320px",margin:'0 10px'}}>
                  <div className="image-block">
                    <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc-2.png`} />
                  </div>
                  <Card.Body>
                    <Card.Title><h6 className='card-heading'>Apollo Hospital</h6></Card.Title>
                    <Card.Text><h6>Chennai</h6></Card.Text>
                    <Card.Text className='card-text'>India - 25 Specialties</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to={''} className="sliderblock">
                <Card className="text-center" style={{width:"320px",margin:'0 10px'}}>
                  <div className="image-block">
                    <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc3.png`} />
                  </div>
                  <Card.Body>
                    <Card.Title><h6 className='card-heading'>Hospital Universitario Austral</h6></Card.Title>
                    <Card.Text><h6>Santa Fe</h6></Card.Text>
                    <Card.Text className='card-text'>Argentina - 3 Specialties</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to={''} className="sliderblock">
                <Card className="text-center" style={{width:"320px",margin:'0 10px'}}>
                  <div className="image-block">
                    <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc4.png`} />
                  </div>
                  <Card.Body>
                    <Card.Title><h6 className='card-heading'>KPJ Damansara Hospital</h6></Card.Title>
                    <Card.Text><h6>Kuala Lumpur</h6></Card.Text>
                    <Card.Text className='card-text'>Malaysia - 28 Specialties</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to={''} className="sliderblock">
                <Card className="text-center" style={{width:"320px",margin:'0 10px'}}>
                  <div className="image-block">
                    <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc5.png`} />
                  </div>
                  <Card.Body>
                    <Card.Title><h6 className='card-heading'>Apollo Hospital</h6></Card.Title>
                    <Card.Text><h6>Chennai</h6></Card.Text>
                    <Card.Text className='card-text'>India - 25 Specialties</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to={''} className="sliderblock">
                <Card className="text-center" style={{width:"320px",margin:'0 10px'}}>
                  <div className="image-block">
                    <Card.Img variant="top" style={{width:'100%'}} src={`${process.env.PUBLIC_URL}/images/mc6.png`} />
                  </div>
                  <Card.Body>
                    <Card.Title><h6 className='card-heading'>Hospital Universitario Austral</h6></Card.Title>
                    <Card.Text><h6>Santa Fe</h6></Card.Text>
                    <Card.Text className='card-text'>Argentina - 3 Specialties</Card.Text>
                  </Card.Body>
                </Card>
              </Link>

            </Slider>
          </Row>
          <Row>
            <div className="text-center">
              <Link to={'/view-medical-center'}><Button className="line-primary-btn px-4 py-2 text-center mt-5" variant="outline-primary"><h6 className='btn-font'>View All Medical Centers</h6></Button></Link>
            </div>
          </Row>
        </Container>
      </section >


      <section id="section-03" className="py-5  medical-tourism-guide" style={{ height: '100vh' }}>
        <Container>
          <Row>
            <div className="col-md-9 mx-auto py-5  text-center">
              <h2 className='main-heading-page my-5'>Medical Tourism Guide</h2>
              <h5 className='main-sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</h5>
            </div>
          </Row>
          <Row>
            <Slider {...mtg}>
              <Card className="sliderblock mgt-block">
                <Card.Body>
                  <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                  <Card.Text>
                    <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                  </Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>
              <Card className="sliderblock mgt-block">
                <Card.Body>
                  <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                  <Card.Text>
                    <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                  </Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>
              <Card className="sliderblock mgt-block">
                <Card.Body>
                  <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                  <Card.Text>
                    <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                  </Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>
              <Card className="sliderblock mgt-block">
                <Card.Body>
                  <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                  <Card.Text>
                    <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                  </Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>
              <Card className="sliderblock mgt-block">
                <Card.Body>
                  <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                  <Card.Text>
                    <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                  </Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>
              <Card className="sliderblock mgt-block">
                <Card.Body>
                  <Card.Title><h4 className='medical-card-heading'>Checking out the doctor</h4></Card.Title>
                  <Card.Text>
                    <h6 className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</h6>
                  </Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>


            </Slider>
          </Row>
        </Container>
      </section>


      <section id="section-04" className="py-5 featured-destinations" style={{ height: '100vh' }}>
        <Container>
          <Row>
            <div className="col-md-8 mb-3">
              <h2 className='main-heading-page'>Featured Destinations</h2>
              <h5 className='main-sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</h5>
            </div>
          </Row>
          <Row>
            <Slider className="arrowonTopright" {...fd}>
              <Card className="sliderblock" style={{width:'250px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/india.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag  m-2 top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/india-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">India</h3>
                    <h4 className="destination-centers">(44 Medical Centers)</h4>
                  </div>
                </div>
              </Card>

              <Card className="sliderblock" style={{width:'250px'}}>
                <Card.Img variant="top" style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/spain.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag  m-2 top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/spain-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Spain</h3>
                    <h4 className="destination-centers">(52 Medical Centers)</h4>
                  </div>
                </div>
              </Card>

              <Card className="sliderblock" style={{width:'250px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/germany.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag  m-2 top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/germany-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Germany</h3>
                    <h4 className="destination-centers">(8 Medical Centers)</h4>
                  </div>
                </div>
              </Card>

              <Card className="sliderblock" style={{width:'250px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/india.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag  m-2 top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/india-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">India</h3>
                    <h4 className="destination-centers">(44 Medical Centers)</h4>
                  </div>
                </div>
              </Card>



            </Slider>
          </Row>
          <Row>
            <div className="text-center py-4">
              <Button className="line-primary-btn px-5 py-2  text-center" variant="outline-primary"><h6 className='btn-font'>View All Destinations</h6></Button>
            </div>
          </Row>
        </Container>
      </section>


      <section id="section-05" className="py-5 testimonials" style={{ height: '100vh' }}>
        <Container>
          <Row>
            <div class="col-md-9 mx-auto py-5 text-center"><h2 className="text-white-heading">What our Patients say...</h2></div>
          </Row>
          <Row>
            <div className="col-md-8 mx-auto text-center testimonial-card">
              <Slider {...testimonial}>
                <Card>
                  <Card.Img variant="top"  className=" mt-3  ml-5 guest-img" src={`${process.env.PUBLIC_URL}/images/guest-testimonial-1.png`} />
                  <Card.Body>
                    <Card.Text className="mt-2">
                      <h6 className="text-white"> Your Service was excellent, I had a reply and appointment within 24 hours.If I require
                        medical assistance in the future I will most certainly consider using your platform. </h6>
                    </Card.Text>
                    <Card.Text className="mt-5">
                      <h5 className="text-white">JULIA ROSE</h5>
                      <h6 className="text-white">From Los Angeles,Calfornia</h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top"  className=" mt-3  ml-5 guest-img" src={`${process.env.PUBLIC_URL}/images/guest-testimonial-1.png`} />
                  <Card.Body>
                    <Card.Text className="mt-2">
                      <h6 className="text-white"> Your Service was excellent, I had a reply and appointment within 24 hours.If I require
                        medical assistance in the future I will most certainly consider using your platform. </h6>
                    </Card.Text>
                    <Card.Text className="mt-5">
                      <h5 className="text-white">JULIA ROSE</h5>
                      <h6 className="text-white">From Los Angeles,Calfornia</h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" className=" mt-3  ml-5 guest-img" src={`${process.env.PUBLIC_URL}/images/guest-testimonial-1.png`} />
                  <Card.Body>
                    <Card.Text className="mt-2">
                      <h6 className="text-white"> Your Service was excellent, I had a reply and appointment within 24 hours.If I require
                        medical assistance in the future I will most certainly consider using your platform. </h6>
                    </Card.Text>
                    <Card.Text className="mt-5">
                      <h5 className="text-white">JULIA ROSE</h5>
                      <h6 className="text-white">From Los Angeles,Calfornia</h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Slider>
            </div>
          </Row>
        </Container>
      </section>

      <section id="section-06" className="py-5 global-provider " style={{ height: '100vh' }}>
        <Container>
          <Row>
            <div className="col-md-8 mb-5">
              <h2 className='main-heading-page'>Global Insurance Providers</h2>
              <h5 className='main-sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</h5>
            </div>
          </Row>
          <Row>
            <Slider className="arrowonTopright" {...globalProvider}>
              <div className="client-block">
                <img src={`${process.env.PUBLIC_URL}/images/global1.png`} alt="" />
              </div>
              <div className="client-block">
                <img src={`${process.env.PUBLIC_URL}/images/global2.png`} alt="" />
              </div>
              <div className="client-block">
                <img src={`${process.env.PUBLIC_URL}/images/global3.png`} alt="" />
              </div>
              <div className="client-block"><img src={`${process.env.PUBLIC_URL}/images/global4.png`} alt="" />
              </div>
              <div className="client-block">
                <img src={`${process.env.PUBLIC_URL}/images/global2.png`} alt="" />
              </div>
            </Slider>
          </Row>
        </Container>
      </section>

      <section id="section-07" className="py-2 latest announcement" style={{ height: '100vh' }}>
        <Container>
          <Row>
            <div className="col-md-8  mx-auto text-center">
              <h2 className='main-heading-page'>Latest Announcements</h2>
              <h5 className='main-sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</h5>
            </div>
          </Row>
          <Row className="mt-4">
            <Col md={4}>
              <Card className="border-0 position-relative blog-card">
                <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog1.png`} />
                <Card.Body>
                  <Card.Title className='card-title'><h5 className='medical-card-heading'>Our New Miami Beach Hotel is Open Now!</h5></Card.Title>
                  <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 position-relative blog-card">
                <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog2.png`} />
                <Card.Body>
                  <Card.Title className='card-title'><h5 className='medical-card-heading'>Know the Secreat of Resort Its Amazing!</h5></Card.Title>
                  <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 position-relative blog-card">
                <Card.Img variant="top"  className="rounded-0" src={`${process.env.PUBLIC_URL}/images/blog3.png`} />
                <Card.Body>
                  <Card.Title className='card-title'><h5 className='medical-card-heading'>How to book a Resort in best price on Mountains</h5></Card.Title>
                  <Card.Text><p className='medical-card-sub-heading'>A guide for what you should ask the doctor or surgeon in order to select the right one for your needs.</p></Card.Text>
                  <Button className="text-link" variant="link">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
           <Link to={'/view-all-announcement'}> <div class="text-center"><button type="button" class="line-primary-btn px-4 py-2 btn btn-outline-primary"><h6 className='btn-font'>View All Announcement</h6></button></div></Link>
          </Row>
        </Container>

      </section>

      <Footer />
    </>
  );
}

export default Homepage;



