import React from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './ViewAllDestination.css';

const ViewAllDestination = () => {
  return (
    <>
      <Header />
      <section className='viewalldestination'>
        <Container>
          <Row>
          <div className='col-md-9 mx-auto mt-5 text-center '>
              <h2 className='view-destination-main-heading'>All Destinations</h2>
              <p className='main-sub-heading-page-fmc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit diam at sodales tempus. Sed varius magna accumsan nulla egestas, sed faucibus justo blandit. In hac habitasse platea dictumst.</p>
          </div>    
          </Row>
          <Row>
            <div className='col-md-9 pt-5 mx-auto destination-card-series-1'>
              <Card className="sliderblock" style={{width:'250px' , height: '550px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/india.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/india-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">India</h3>
                    <h4 className="destination-centers">(44 Medical Centers)</h4>
                  </div>
                </div>
              </Card>

              <Card className="sliderblock" style={{width:'250px' ,height: '550px'}}>
                <Card.Img variant="top" style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/spain.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/spain-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Spain</h3>
                    <h4 className="destination-centers">(52 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='col-md-9 pt-5 mx-auto destination-card-series-1'>
              <Card className="sliderblock" style={{width:'250px' ,height: '550px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/germany.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/germany-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Germany</h3>
                    <h4 className="destination-centers">(8 Medical Centers)</h4>
                  </div>
                </div>
              </Card>

              <Card className="sliderblock" style={{width:'250px' , height: '550px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/india.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/india-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">India</h3>
                    <h4 className="destination-centers">(44 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='col-md-9 pt-5 mx-auto destination-card-series-1'>
              <Card className="sliderblock" style={{width:'250px' ,height: '550px'}}>
                <Card.Img variant="top" style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/spain.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/spain-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Spain</h3>
                    <h4 className="destination-centers">(52 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
              <Card className="sliderblock" style={{width:'250px' ,height: '550px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/germany.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/germany-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Germany</h3>
                    <h4 className="destination-centers">(8 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='col-md-9 pt-5 mx-auto destination-card-series-1'>
              <Card className="sliderblock" style={{width:'250px' , height: '550px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/india.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/india-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">India</h3>
                    <h4 className="destination-centers">(44 Medical Centers)</h4>
                  </div>
                </div>
              </Card>

              <Card className="sliderblock" style={{width:'250px' ,height: '550px'}}>
                <Card.Img variant="top" style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/spain.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/spain-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Spain</h3>
                    <h4 className="destination-centers">(52 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='col-md-9 pt-5 mx-auto mb-5 destination-card-series-1'>
              <Card className="sliderblock" style={{width:'250px' ,height: '550px'}}>
                <Card.Img variant="top" style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/spain.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag  m-2 top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/spain-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Spain</h3>
                    <h4 className="destination-centers">(52 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
              <Card className="sliderblock" style={{width:'250px' ,height: '550px'}}>
                <Card.Img variant="top"  style={{width:"100%"}} src={`${process.env.PUBLIC_URL}/images/germany.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag  m-2 top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/germany-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Germany</h3>
                    <h4 className="destination-centers">(8 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default ViewAllDestination