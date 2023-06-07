import React from 'react'
import '../ViewMedicalCenterInfoPages/MedicalCenterInfoPages.css'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
// import Slider from 'react-slick';



// const medicalSlideShow = {
//   dots: false,
//   autoplay:true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   arrows: true,  
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         dots: true,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 480, 
//       settings: {
//         arrows: false,
//         dots: true,
//         centerMode: false,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// }; 



const MedicalCenterInfoPages_1 = () => {
  return (
    <>
      <Header />
      <section id='medical-center-info-page_1' >
        <Container>
          <Row>
            <div className='col-md-4 mt-5 '>
              <h1>Galenia Hospital</h1>
              <img className='mt-4' src={`${process.env.PUBLIC_URL}/images/mc1.png`}></img>
              <h4>Location</h4>
            </div>
          </Row>
          {/* <Row>
            <div className='col-md-4 mx-auto'>
              <Slider {...medicalSlideShow}>
                <div className='medicalslide position-relative'>
                  <img  className='medicalslideheight' src={`${process.env.PUBLIC_URL}/images/slide_01.jpg`} alt=""></img>
                </div>
              </Slider>
            </div>
          </Row> */}
          <Row>
            <div className='col-md-7 mt-5'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
            </div>
          </Row>
        </Container>
     </section>
     <Footer />
    </> 
  )
}

export default MedicalCenterInfoPages_1