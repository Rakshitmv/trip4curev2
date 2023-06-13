import React,{useState} from 'react'
import '../ViewMedicalCenterInfoPages/MedicalCenterInfoPages.css'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Slider from 'react-slick';
import MedicalMenuBarServices from './MedicalCenterMenuBar/MedicalMenuBarServices';



const medicalSlideShow = {
  dots: false,
  autoplay:true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
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
    // {
    //   breakpoint: 480, 
    //   settings: {
    //     arrows: false,
    //     dots: true,
    //     centerMode: false,
    //     centerPadding: '40px',
    //     slidesToShow: 1
    //   }
    // }
  ]
}; 



const MedicalCenterInfoPages_1 = () => {

  const [selectedImage, setSelectedImage] = useState(null);

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

  const images = [
    { src: process.env.PUBLIC_URL + '/images/slide_01.jpg', alt: 'Image 1' },
    { src: process.env.PUBLIC_URL + '/images/slide_02.jpg', alt: 'Image 2' },
    { src: process.env.PUBLIC_URL + '/images/slide_03.jpg', alt: 'Image 3' },
    { src: process.env.PUBLIC_URL + '/images/slide_04.jpg', alt: 'Image 4' },
    { src: process.env.PUBLIC_URL + '/images/slide_05.jpg', alt: 'Image 5' },
  ];

  return (
    <>
      <Header />
      <section id='medical-center-info-page_1' >
        <Container>
          <Row>
            <div>
              <div className='col-md-4 mt-5 '>
              <h1>Galenia Hospital</h1>
              </div>
              <div className='col-md-8 mt-5 medical-img-intro'>
                <img className='mt-3 me-4 ' src={`${process.env.PUBLIC_URL}/images/mc1.png`}></img>
                <div>
                  <h4 className='mt-3'>Location</h4>
                  <h6 className='mt-3'>Mexico City, Mexico</h6>
                  <button type="button"  class="line-primary-btn  mt-3 px-4 py-2 btn btn-outline-primary menu-bar-info">Contact Hospital</button>
                </div>
                
              </div>
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
            
            <div className=' col-md-12 mt-5 mx-auto img-gallery'>
              {/* <Slider {...medicalSlideShow}> */}
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
              {/* <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img> */}
               {/* </Slider> */}
            </div>
            
          </Row>
          <Row>
            <div className='col-md-8 mt-5  medical-center-menu-bar'>
              <button type="button" class="line-primary-btn px-4 py-2 btn btn-outline-primary menu-bar-info-1">Overview</button>
              <Link to={'/view-medical-center/medical-center-info-page_1/medical-menu-bar-service'}><button type="button" class="line-primary-btn px-4 py-2 btn btn-outline-primary menu-bar-info-2">Services</button></Link>
              <Link to={'/view-medical-center/medical-center-info-page_1/medical-menu-bar-doctor'}><button type="button" class="line-primary-btn px-4 py-2 btn btn-outline-primary menu-bar-info-3">Doctors</button></Link>
            </div>
          </Row>
          <Row>
            <div className='col-md-7 mt-5'>
              <h1 className='mb-3'> Galenia Hospital-Overview</h1>
              <h2 style={{color: 'gray'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</h2>
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