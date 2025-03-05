import React, { useState } from 'react';
import "../visa/visa.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Form, Row, Col, Container, InputGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Azerbaijancards from '../../Assets/Azerbaijancards.jpg';
import Brazilcards from "../../Assets/Brazilcards.jpg";
import Switzerlandcards from "../../Assets/Switzerlandcards.jpg";
import Francecards from "../../Assets/Francecards.jpg";
import Italycards from "../../Assets/Italycards.jpg";
import Newzealandcards from "../../Assets/Newzealandcards.jpg";
import orange1 from '../../Assets/Orange1.jpg'
const Visa = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Data for cards
  const visaCards = [
    { country: 'Azerbaijan', image: Azerbaijancards, link: '/Azerbaijan', price: '₹1199' },
    { country: 'Brazil', image: Brazilcards, link: '/Brazil', price: '₹1199' },
    { country: 'Switzerland', image: Switzerlandcards, link: '/Switzerland', price: '₹1199' },
    { country: 'France', image: Francecards, link: '/France', price: '₹1199' },
    { country: 'Italy', image: Italycards, link: '/Italy', price: '₹1199' },
    { country: 'New Zealand', image: Newzealandcards, link: '/Newzealand', price: '₹1199' }
  ];

  // Filter cards based on search term
  const filteredCards = visaCards.filter((card) =>
    card.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Visa Header Section */}
      <div className='div2 header-image' style={{backgroundImage: `url(${orange1})`}}>
        <h1 className='display-6 fw-bold text-white mt-5'>VISA</h1>
        <p className='h5 fw-bold text-white'>"A journey of a thousand miles begins with a single step"</p>
        <br />
        <Form style={{ display: 'flex', justifyContent: "center" }}>
          <Row>
            <Col md={6} style={{ width: "300px", display: 'flex', justifyContent: "center" }}>
              <InputGroup className="d-flex justify-content-center mt-4 mb-5">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputGroup.Text>
                  <i className="bi-search"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Cards Section */}
      <Container className='mt-3 mb-3 align-items-center'>
        <Row className='ms-5'>
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <Col key={index} className='mt-3'>
                <Link to={card.link} className="text-decoration-none">
                  <Card className='hover-effect' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                      <Card.Title className='text-center fw-bold h5'>{card.country}</Card.Title>
                      <Card.Text className='text-center fw-bold'>E-VISA</Card.Text>
                      <Card.Text className='text-center fw-bold h5'>Starting From {card.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <Col className='mt-3'>
              <p className='text-center'>No results found for "{searchTerm}"</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Visa;
