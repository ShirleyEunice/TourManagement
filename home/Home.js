import React from 'react'
import './home.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Container className="trusted-section py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="text-content">
            <h5 className="text-orange">Trusted Travel Agency <span className="text-muted">in South India</span></h5>
            <h1 className="display-4 fw-bold">
              Plan the Trip of a <span className="text-warning">Lifetime</span> <br />
              with Ease
            </h1>
            <p className="mt-3">
              The Best <strong>Travel Agency</strong> in South India, Go Globe,
              provides that your next vacation will be very memorable. We personalize
              every aspect with the help of our knowledgeable staff of travel agents,
              ensuring a lifetime of priceless memories.
            </p>
            <Button variant="warning" className="px-4 py-2 mt-3" as={Link} to="/our-company">
              More Info
            </Button>
          </div>
        </Col>
        <Col md={6} className="text-end">
          <img
            src="img/worldmap.png"
            alt="World Map"
            className="img-fluid"
            style={{ maxHeight: "250px" }}
          />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Home;