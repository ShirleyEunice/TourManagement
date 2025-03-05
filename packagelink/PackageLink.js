import React from 'react'
import './packagelink.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPlane, FaTrain, FaHeart, FaPassport } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PackageLink = () => {
    const links = [
      {
        link:"/international",
        title: "International",
        icon: "img/airplane-min.png",
        bg: "img/Colosseum-Rome-Italy.png",
      },
      {
        link:"/domestic",
        title: "Domestic",
        icon: "img/train-min.png",
        bg: "img/tajmahal.png",
      },
      {
        link:"/honeymoon",
        title: "Honeymoon",
        icon: "img/honeymoon-min.png",
        bg: "img/Honeymoon.jpg",
      },
      {
        link:"/visa",
        title: "Visa",
        icon: "img/visa-ticket.png",
        bg: "img/Visa.png",
      },
    ];
  return (
    <div>
      <Container className="py-5">
      <Row>
        {links.map((link, index) => (
          <Col md={6} lg={3} className="mb-5" key={index}>
            <Card className="text-center shadow-sm border-0 rounded-3">
              <Link
              to={link.link}
              key={index}
              className='text-decoration-none'>
              {/* Background Image */}
              <div
                className="card-img-container"
                style={{
                  backgroundImage: `url(${link.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                  height: "150px",
                }}
              ></div>
              {/* Body with Icon and Title */}
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src={link.icon}
                  alt={`${link.title} Icon`}
                  className="mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="fw-bold">{link.title}</h5>
              </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default PackageLink