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
              
              <Card className="sliderblock" style={{ width: '250px', height: '500px' }}>
                <Link to={'/view-all-destination/AllDestinations/Destination1'}>
                <Card.Img variant="top"  style={{width:"100%", height: "100%" }} src={`${process.env.PUBLIC_URL}/images/india.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/india-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">India</h3>
                    <h4 className="destination-centers">(44 Medical Centers)</h4>
                  </div>
                </div>
                </Link>
              </Card>
          

              <Card className="sliderblock" style={{width:'250px' ,height: '500px'}}>
                <Card.Img variant="top" style={{width:"100%" , height: "100%"}} src={`${process.env.PUBLIC_URL}/images/spain.png`} />
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
              <Card className="sliderblock" style={{width:'250px' ,height: '500px'}}>
                <Card.Img variant="top"  style={{width:"100%" , height: "100%"}} src={`${process.env.PUBLIC_URL}/images/germany.png`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/germany-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Germany</h3>
                    <h4 className="destination-centers">(8 Medical Centers)</h4>
                  </div>
                </div>
              </Card>

              <Card className="sliderblock" style={{width:'250px' , height: '500px'}}>
                <Card.Img variant="top"  style={{width:"100%", height: "100%"}} src={`${process.env.PUBLIC_URL}/images/usa.jpg`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/usa-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">USA</h3>
                    <h4 className="destination-centers">(150 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='col-md-9 pt-5 mx-auto destination-card-series-1'>
              <Card className="sliderblock" style={{width:'250px' ,height: '500px'}}>
                <Card.Img variant="top" style={{width:"100%", height: "100%"}} src={`${process.env.PUBLIC_URL}/images/canada.jpg`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/canada-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Canada</h3>
                    <h4 className="destination-centers">(90 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
              <Card className="sliderblock" style={{width:'250px' ,height: '500px'}}>
                <Card.Img variant="top"  style={{width:"100%", height: "100%"}} src={`${process.env.PUBLIC_URL}/images/england.jpg`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/england-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">England</h3>
                    <h4 className="destination-centers">(75 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='col-md-9 pt-5 mx-auto destination-card-series-1'>
              <Card className="sliderblock" style={{width:'250px' , height: '500px'}}>
                <Card.Img variant="top"  style={{width:"100%", height: "100%"}} src={`${process.env.PUBLIC_URL}/images/russia.jpg`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/russia-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Russia</h3>
                    <h4 className="destination-centers">(123 Medical Centers)</h4>
                  </div>
                </div>
              </Card>

              <Card className="sliderblock" style={{width:'250px' ,height: '500px'}}>
                <Card.Img variant="top" style={{width:"100%" ,height: "100%"}} src={`${process.env.PUBLIC_URL}/images/china.jpg`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag   top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/china-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">China</h3>
                    <h4 className="destination-centers">(200 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='col-md-9 pt-5 mx-auto mb-5 destination-card-series-1'>
              <Card className="sliderblock" style={{width:'250px' ,height: '500px'}}>
                <Card.Img variant="top" style={{width:"100%", height: "100%"}} src={`${process.env.PUBLIC_URL}/images/japan.jpg`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag  m-2 top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/japan-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">Japan</h3>
                    <h4 className="destination-centers">(69 Medical Centers)</h4>
                  </div>
                </div>
              </Card>
              <Card className="sliderblock" style={{width:'250px' ,height: '500px'}}>
                <Card.Img variant="top"  style={{width:"100%", height: "100%"}} src={`${process.env.PUBLIC_URL}/images/uae.jpg`} />
                <div className="fd-content">
                  <Card.Img className=" i-flag  m-2 top-0 start-0" variant="top" src={`${process.env.PUBLIC_URL}/images/uae-flag.png`} />
                  <div className="fd-bottom-content">
                    <h3 className="destination-country">UAE</h3>
                    <h4 className="destination-centers">(25 Medical Centers)</h4>
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