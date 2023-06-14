import React,{ useEffect, useState } from 'react'
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = () => {

    const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const country = queryParams.get('country');
    const specialty = queryParams.get('specialty');

    const fetchSearchResults = async () => {
      try {
        const response = await fetch('http://13.234.216.30:8080/search_hospital/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ country, specialty }),
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
    <>
       <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Search