import React from 'react'
import './carousel.css';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
  return (
    <div>
      <Carousel fluid>
  <Carousel.Item>
    <img src="img/homecarousel.png" alt="Discovery"></img>
    <Carousel.Caption className="custom-caption">
      <h1 className="carouselHead">DISCOVERY</h1>
      <h1 className="carouselSubHead">ENCOURAGING EXPLORATION OF NEW PLACES AND HIDDEN GEMS</h1>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img src="img/home1carousel.png" alt="Adventure"></img>
    <Carousel.Caption className="custom-caption">
      <h1 className="carouselHead">ADVENTURE</h1>
      <h1 className="carouselSubHead">HIGHLIGHTING EXCITING TRAVEL EXPERIENCES AND OUTDOOR ACTIVITIES</h1>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img src="img/home2carousel.png" alt="Culture"></img>
    <Carousel.Caption className="custom-caption">
      <h1 className="carouselHead">CULTURE</h1>
      <h1 className="carouselSubHead">CELEBRATING LOCAL HERITAGE, TRADITIONS, AND UNIQUE EXPERIENCES</h1>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img src="img/home3carousel.png" alt="Relaxation"></img>
    <Carousel.Caption className="custom-caption">
      <h1 className="carouselHead">RELAXATION</h1>
      <h1 className="carouselSubHead">UNWINDING WITH PEACEFUL DESTINATIONS AND TRANQUIL ESCAPES</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Carousels;