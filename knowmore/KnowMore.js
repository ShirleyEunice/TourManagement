import React from "react";
import "./knowmore.css";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const KnowMore = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/img/blurbackground.jpg')`, // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        position: "relative",
        padding: "50px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Carousel Column */}
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 back"
                  src="img/coupleback.jpg" // Replace with carousel image 1
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 back"
                  src="img/girlsback.jpg" // Replace with carousel image 2
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 back"
                  src="img/friendsback.jpg" // Replace with carousel image 3
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Text Column */}
          <Col lg={6} md={12}>
            <h5 style={{ fontStyle: "italic", color: "#F5A623" }}>
              Discover Go Globe
            </h5>
            <h1>Planning your Vacation</h1>
            <p>
              Go Globe has everything you need to make the most of your next
              dream holiday. One of the <b>best travel agencies in South India</b>,
              offering the <b>best international packages</b>, dedicated to making
              your next vacation unforgettable.
            </p>
            <Button
              variant="warning"
              as={Link} to="/packages"
              style={{
                fontWeight: "bold",
                borderRadius: "25px",
              }}
            >
              Know More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KnowMore;