import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = () => {

  const { speciality, country } = useParams();

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    const fetchSearchResults = async () => {
      try {
        const response = await fetch('http://13.234.216.30:8080/search_hospital/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ country, specility: speciality }),
        });

        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, []);

  return (
    <Container>
      <h2>Search Results</h2>
      <Row>
        {searchResults.map((result) => (

          <Col md={4} xl={3} key={result.id}>
            <Link to={`/view-medical-center/${result.id}`} className="sliderblock">
              <Card className="text-center">
                <div className="image-block">
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/mc1.png`} />
                </div>
                <Card.Body>
                  <Card.Title><h4 className='card-heading'>{result.hospital.hospital_name}</h4></Card.Title>
                  <Card.Text><p className='card-sub-heading-view-medical'>{result.hospital.hospital_city}</p></Card.Text>
                  <Card.Text><p>{result.hospital.hospital_country} - 16 Specialties</p></Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Search