import React, {useState} from 'react'
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import '../../ViewMedicalCenterInfoPages/MedicalCenterInfoPages.css'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MedicalMenuBarDoctors = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
                  <h6 className='mt-3'>Madrid,Spain</h6>
                  <button type="button"  class="line-primary-btn  mt-3 px-4 py-2 btn btn-outline-primary menu-bar-info">Contact Hospital</button>
                </div>
                
              </div>
            </div>
        
          </Row>
           <Row>
            <div className=' col-md-12 mt-5 mx-auto img-gallery'>
              <img  className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
              <img className= 'img-gallery-slider' src={`${process.env.PUBLIC_URL}/images/slide_03.jpg`} alt=""></img>
            </div>
          </Row>
          <Row>
            <div className='col-md-8 mt-5  medical-center-menu-bar'>
              <Link to={'/view-medical-center/medical-center-info-page_1/medical-menu-bar-doctor/medical-center-info-page_1'}><button type="button" class="line-primary-btn px-4 py-2 btn btn-outline-primary menu-bar-info-1">Overview</button></Link>
              <Link to={'/view-medical-center/medical-center-info-page_1/medical-menu-bar-doctor/medical-menu-bar-service'}><button type="button" class="line-primary-btn px-4 py-2 btn btn-outline-primary menu-bar-info-2">Services</button></Link>
              <button type="button" class="line-primary-btn px-4 py-2 btn btn-outline-primary menu-bar-info-3">Doctors</button>
            </div>
          </Row>
          <Row>
            <div className='col-md-7 mt-5'>
              <h4>Staff</h4>  
              
            </div>
            <div className='col-md-7 mt-5'>
             
                <select value={selectedOption} onChange={handleOptionChange}>
                  <option value="">-- Select --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                {selectedOption && (
                  <p>You have selected: {selectedOption}</p>
                )}
            </div>
          </Row>
        </Container>
     </section>
     <Footer />
      </>
  )
}

export default MedicalMenuBarDoctors