import React from "react";
import { Container, Row, Col, Breadcrumb, Card , Button} from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const ChennaiContact = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        style={{
          backgroundImage:"url(/img/chennaicontact.jpg)",
          color: "white",
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>TRAVEL AGENCY IN CHENNAI</h1>
        <h3>Contact Us</h3>
      </div>

      {/* Breadcrumb Section */}
      <Container className="mt-3">
        <Breadcrumb>
          <Breadcrumb.Item as={Link} to="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Travel agency in Chennai</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Contact Information Section */}
      <Container className="py-5">
        <Row className="g-4">
          {/* Reach Us Card */}
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <div className="mb-3" style={{ fontSize: "2rem", color: "#F5A623" }}>
                  <FaLocationDot />
                </div>
                <Card.Title>REACH US</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CHENNAI</Card.Subtitle>
                <Card.Text>
                Second Floor, Nagini Building, <br />
              Near Park Gate Roundana, <br />
              Park Gate, Sholinganalur, Chennai, <br />
              Tamil Nadu 600097
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Call Us Card */}
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <div className="mb-3" style={{ fontSize: "2rem", color: "#F5A623" }}>
                  <IoCall />
                </div>
                <Card.Title>CALL US</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Mobile Number</Card.Subtitle>
                <Card.Text>
                  9362266666 <br /> 9751166660
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Mail Us Card */}
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <div className="mb-3" style={{ fontSize: "2rem", color: "#F5A623" }}>
                  <MdMail />
                </div>
                <Card.Title>MAIL US</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">MAIL</Card.Subtitle>
                <Card.Text>
                  Write to this email for a detailed quotation <br />
                  <Button
              
              href="https://mail.google.com/"
              style={{
                fontWeight: "bold",
                borderRadius: "25px",
                padding: "10px 20px",
                color: "black",
                backgroundColor:'white',
                textDecorationLine:'none'
              }}
            >
              holidaysgoglobe@gmail.com
            </Button>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChennaiContact;
