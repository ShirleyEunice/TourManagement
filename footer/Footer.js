import React from 'react'
import './footer.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
    <div style={{ backgroundColor: "#1b1e3a", color: "white", padding: "50px 0" }}>
      <Container>
        <Row className="mb-4">
          <Col md={8}>
            <h2>Travel beyond your imagination, with our Travel Agency!</h2>
          </Col>
          <Col md={4}>
            <Button
              variant="warning"
              href="https://mail.google.com/"
              style={{
                fontWeight: "bold",
                borderRadius: "25px",
                padding: "10px 20px",
                color: "black",
              }}
            >
              holidaysgoglobe@gmail.com
            </Button>
            <p className="mt-3">
              +91 9393939393 <br /> +91 9595959595
            </p>
          </Col>
          <Col md={4} className="text-center">
            <div className="d-flex justify-content-center">
              <i className="fab fa-instagram mx-3 icon"></i>
              <i className="fab fa-linkedin mx-3 icon"></i>
              <i className="fab fa-youtube mx-3 icon"></i>
              <i className="fab fa-twitter mx-3 icon"></i>
              <i className="fab fa-whatsapp mx-3 icon"></i>
            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: "white" }} />
        <Row>
          <Col md={4}>
            <h5 style={{ color: "#F5A623" }}>Corporate Office Address</h5>
            <p className='py-4'>
              Chennai<br />
              Second Floor, Nagini Building, <br />
              Near Park Gate Roundana, <br />
              Park Gate, Sholinganalur, Chennai, <br />
              Tamil Nadu 600097
            </p>
          </Col>
          <Col md={4}>
            <h5 style={{ color: "#F5A623" }}>Our Branches</h5>
            <p className='py-4'>
              <span style={{color:"#FEBE10"}}>Coimbatore</span> <br />
              Pride Centre, Ground Floor, <br />
              Pathari Road, Gandhipuram, Coimbatore, <br />
              Tamil Nadu 641012
            </p>
            <p>
            <span style={{color:"#FEBE10"}}>Trichy</span> <br />
              5/34 - A, MVS Nagar 4th Cross, <br />
              Thalavaipatti, Trichy, TamilNadu 620001
            </p>
          </Col>
          <Col md={3}>
            <Row className='mx-auto'>
              <Col>
                <h5 style={{ color: "#F5A623" }}>Quick Links</h5>
                <ul style={{ listStyleType: "none"}} className='my-2'>
                  <li><Link to="/our-company" style={{ textDecoration: "none", color: "inherit" }}>About</Link></li>
                  <li><Link to="/chennai" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link></li>
                  <li><Link to="/packages" style={{ textDecoration: "none", color: "inherit" }}>Packages</Link></li>
                </ul>
              </Col>
              <Col>
                <h5 style={{ color: "#F5A623" }}>Package Category</h5>
                <ul style={{ listStyleType: "none"}} className='my-2'>
                  <li><Link to="/international" style={{ textDecoration: "none", color: "inherit" }}>International</Link></li>
                  <li><Link to="/domestic" style={{ textDecoration: "none", color: "inherit" }}>Domestic</Link></li>
                  <li><Link to="/honeymoon" style={{ textDecoration: "none", color: "inherit" }}>HoneyMoon</Link></li>
                </ul>
              </Col>
              <Col>
                <h5 style={{ color: "#F5A623" }}>Affordable Services</h5>
                <ul style={{ listStyleType: "none"}}>
                <li><Link to="/visa" style={{ textDecoration: "none", color: "inherit" }}>Visa</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Footer;