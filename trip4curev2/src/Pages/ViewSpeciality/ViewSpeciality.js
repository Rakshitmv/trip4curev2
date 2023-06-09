import React from 'react'
import '../ViewSpeciality/ViewSpeciality.css'
import {  Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ViewSpeciality = () => {
  return (
    <>
      <Header />
      <section className='viewspeciality-page'>
        <Container>
          <Row>
            <div className=' text-center mt-5 mx-auto viewspeciality-header'>
              <h2 className='viewspeciality-main-heading'>All Available Specialties</h2>
              <p className='viewspeciality-sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
            </div>
          </Row>
          <Row>
            <div className='col-md-12 mt-5 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/addiction-treatment.png`} alt="" />
              <h5 className='viewspeciality-heading'>Addiction Treatment</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/aesthetics.png`} alt="" />
              <h5 className='viewspeciality-heading'>Aesthetics</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/anesthesiology.png`} alt="" />
              <h5 className='viewspeciality-heading'>Anesthesiology</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/bariatric-surgery.png`} alt="" />
              <h5 className='viewspeciality-heading'>Bariatric Surgery</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/bone-marrow-transplant.png`} alt="" />
              <h5 className='viewspeciality-heading'>Bone Marrow Transplant</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/cancer-treatment.png`} alt="" />
              <h5 className='viewspeciality-heading'>Cancer Treatment</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/cardiac-surgery.png`} alt="" />
              <h5 className='viewspeciality-heading'>Cardiac Surgery</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/cardiology.png`} alt="" />
              <h5 className='viewspeciality-heading'>Cardiology</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/cosmetic-surgery.png`} alt="" />
              <h5 className='viewspeciality-heading'>Cosmetic Surgery</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/dental.png`} alt="" />
              <h5 className='viewspeciality-heading'>Dental</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/dermatology.png`} alt="" />
              <h5 className='viewspeciality-heading'>Dermatology</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/dialysis.png`} alt="" />
              <h5 className='viewspeciality-heading'>Dialysis</h5>
            </div>
            <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/ear-nose-and-throat.png`} alt="" />
              <h5 className='viewspeciality-heading'>Ear Nose And Throat</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/endocrinology.png`} alt="" />
              <h5 className='viewspeciality-heading'>Endocrinology</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/eye-surgery.png`} alt="" />
              <h5 className='viewspeciality-heading'>Eye Surgery</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/fertility-treatments.png`} alt="" />
              <h5 className='viewspeciality-heading'>Fertility Treatments</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/gastroenterology.png`} alt="" />
              <h5 className='viewspeciality-heading'>Gastroenterology</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/general-surgery.png`} alt="" />
              <h5 className='viewspeciality-heading'>General Surgery</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/hair-transplant.png`} alt="" />
              <h5 className='viewspeciality-heading'>Hair Transplant</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/hematology.png`} alt="" />
              <h5 className='viewspeciality-heading'>Hematology</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/imaging.png`} alt="" />
              <h5 className='viewspeciality-heading'>Imaging</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/medical-check-ups.png`} alt="" />
              <h5 className='viewspeciality-heading'>Medical Check Ups</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/nephrology.png`} alt="" />
              <h5 className='viewspeciality-heading'>Nephrology</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/neurology.png`} alt="" />
              <h5 className='viewspeciality-heading'>neurology</h5>
            </div>
               <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/neuro-surgery.png`} alt="" />
              <h5 className='viewspeciality-heading'>Neuro Surgery</h5>
            </div>
               <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/ob-gyn.png`} alt="" />
              <h5 className='viewspeciality-heading'>Ob Gyn</h5>
            </div>
               <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/orthopedics.png`} alt="" />
              <h5 className='viewspeciality-heading'>Orthopedics</h5>
            </div>
               <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/pediatrics.png`} alt="" />
              <h5 className='viewspeciality-heading'>Pediatrics</h5>
            </div>
               <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/rehabilitation.png`} alt="" />
              <h5 className='viewspeciality-heading'>Rehabilitation</h5>
            </div>
               <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/stem.png`} alt="" />
              <h5 className='viewspeciality-heading'>Stem</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/thyroid.png`} alt="" />
              <h5 className='viewspeciality-heading'>Thyroid</h5>
            </div>
              <div className='col-md-12 mt-4 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/urology.png`} alt="" />
              <h5 className='viewspeciality-heading'>Urology</h5>
            </div>
              <div className='col-md-12 mt-4 mb-5 mx-auto icon-img-heading'>
              <img className='icon-img me-3' src={`${process.env.PUBLIC_URL}/images/vascular-surgery.png`} alt="" />
              <h5 className='viewspeciality-heading'>Vascular Surgery</h5>
            </div>


          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default ViewSpeciality