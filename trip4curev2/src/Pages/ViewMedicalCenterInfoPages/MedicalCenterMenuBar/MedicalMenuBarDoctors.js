import React, {useState} from 'react'
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import '../../ViewMedicalCenterInfoPages/MedicalCenterInfoPages.css'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from 'react-select';




const speciality = [
  { value: 'Cancer Treatment', label: 'Cancer Treatment' },
  { value: 'Cardiac Surgery', label: 'Cardiac Surgery' },
  { value: 'Cosemtic Surgery', label: 'Cosemtic Surgery' },
  { value: 'Fertility Treatment', label: 'Fertility Treatment' },
  { value: 'Neurology', label: 'Neurology' },
  { value: 'Orthopedic Surgery', label: 'Orthopedic Surgery' }

]


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
            <div className='col-md-8 mt-5'>
              <h4>Staff</h4>  
              
            </div>
          </Row>
          <Row>
              <Col xl={3} md={4} className="col-2 pt-1 me-3">
                <Select className="medical-menu-bar-select" placeholder="--All Specialties--" options={speciality}></Select>  
              </Col>
              <Col xl={3} md={4} className="col-2 pt-1 ">
                 <input name="text" type="text" className='menu-bar-name' style={{width: '200px' , height: '35px'}} placeholder='Name' />
            </Col>
            <Col xl="3">
                <button type="submit" className=" w-90 h-100 medical-menu-search-btn" style={{ backgroundColor: '#b8353b', color: 'white' }}><i class="fa fa-search"></i> Search</button>
            </Col>
          
                {/* <select  className="select-drop-menu"  value={selectedOption} onChange={handleOptionChange}>
                  <option  className="select-drop-menu" value="">-- Select --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select> */}
          </Row>
          <Row>
              <div className='col-md-12 mt-5 medical-doctor-menu-card-1'  >
                <img src={`${process.env.PUBLIC_URL}/images/mc3.png`} style={{ width: '130px', height: '100px' }} className="" alt="" />
                <div>
                  <h2>Dr Vincent</h2>
                  <h4>Designation</h4>
                </div>
              </div>
          </Row>
        </Container>
     </section>
     <Footer />
      </>
  )
}

export default MedicalMenuBarDoctors