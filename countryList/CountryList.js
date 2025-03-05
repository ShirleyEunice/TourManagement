import React from 'react'
import './countrylist.css';
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CountryList = () => {
  return (
    <div>
      {/* Header Section */}
      <Container className="text-left my-5">
        <h2 className="text-warning">Leading Travel Agency in South India</h2>
        <h1 className="fw-bold">Travel Destinations Available Worldwide</h1>
        <p className="text-muted">
          We're the masters of turning 'I need a vacation' into 'I'm on a plane!' Get ready to trade your cubicle for a 
          hammock, and your daily grind for stunning sunsets. We've got more wanderlust-inducing destinations than you 
          can shake a selfie stick at, and we're here to sprinkle your trips with that extra dose of awesome. So buckle up,
           fellow explorer, and get ready for a wild ride through our virtual vacation wonderland with the <strong>Best travel agency in South India!</strong>
        </p>
      </Container>

      {/* Carousel Section */}
      
      <Container className="my-5">
        
        <Carousel>
          {/* Asia Section */}
          <Carousel.Item>
            <Link to="/international/asia" > 
            <Row className="justify-content-center">
              <Col md={4}>
                <Card className='my-5'>
                  <Card.Img
                    variant="top"
                    src="/img/asia.jpg"
                  />
                  <Card.Body>
                    <Card.Title><h3>Asia</h3></Card.Title>
                    <Card.Text>
                      Explore the wonders of Asia, a continent filled with diverse
                      cultures, ancient history, and breathtaking landscapes. From
                      serene temples to bustling markets, there's something for
                      every traveler.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </Link>
          </Carousel.Item>
          
          {/* America Section */}
          
          <Carousel.Item>
            <Link to='/international/america'>
            <Row className="justify-content-center">
              <Col md={4}>
                <Card className='my-5'> 
                  <Card.Img
                    variant="top"
                    src="/img/america.jpg"
                  />
                  <Card.Body>
                    <Card.Title><h3>America</h3></Card.Title>
                    <Card.Text>
                      Discover the charm of America, a land of iconic landmarks,
                      vibrant cities, and natural wonders. From the Grand Canyon to
                      bustling cityscapes, adventure awaits around every corner.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </Link>
          </Carousel.Item>
          

          {/* Europe Section */}
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={4}>
                <Card className='my-5'>
                  <Card.Img
                    variant="top"
                    src="/img/europe.jpg"
                  />
                  <Card.Body>
                    <Card.Title><h3>Europe</h3></Card.Title>
                    <Card.Text>
                      Step into the timeless elegance of Europe, where history meets
                      modernity. From charming cobblestone streets to majestic
                      castles, every moment feels like a fairytale come true.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default CountryList