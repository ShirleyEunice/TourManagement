// import React from 'react'
// import { Link } from 'react-router-dom'

// const Service = () => {
//   return (
//     <div>

//         <Link to='/Currencyexchange'>
//         <button type='submit'>Submit</button>
//         </Link>
//     </div>
//   )
// }

// export default Service




import React from 'react'

import '../services/services.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Azerbaijancards from "../../Assets/Azerbaijancards.jpg";
import Italycards from "../../Assets/Italycards.jpg";
import Indiacards from "../../Assets/Indiacards.jpg";
import Serviceimg2 from "../../Assets/Serviceimg2.jpg";
import Serviceimg3 from "../../Assets/Serviceimg3.jpg";
import Serviceimg4 from "../../Assets/Serviceimg4.jpg";
import Servicelastimg from "../../Assets/Servicelastimg.jpg";
import Customerform from './Customerform';

const Services = () => {

    return (

        <div>
            {/* Service */}

            <div className='div2'>
                <h1 className='display-5 fw-bold text-white mt-5'>Service</h1>
                <p className='h4 fw-bold text-white'>"Our Service"</p>
            </div>
            <Container>


                {/* Row1 */}


                <Row className='mt-5 mb-5'>
                    <Col>
                        <h3 className='mb-5 fw-light fst-italic text-warning display-5'>Take off on a Journey, Like Never Before!</h3>
                        <h4 className='fw-bold text-decoration-underline mb-3'>Your Ultimate Travel Partner</h4>
                        <p className='h5 fst-italic'>Discover the world with our tailor-made travel packages that offer comfort, convenience, and unforgettable memories. Whether you're craving an international escape or a domestic retreat, we bring you the best deals from Coimbatore, ensuring a seamless journey from takeoff to touchdown.</p>
                    </Col>
                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <Image className='image-size' src={Azerbaijancards} alt="Azerbaijan-img"></Image>
                                <Carousel.Caption>
                                    <h3 className='text-light fst-italic'>Azerbaijan</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className='image-size' src={Indiacards} alt="India-img"></Image>
                                <Carousel.Caption>
                                    <h3 className='text-light fst-italic'>India</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className='image-size' src={Italycards} alt="Italy-img"></Image>
                                <Carousel.Caption>
                                    <h3 className='text-light fst-italic'>Italy</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>


                    <div className='mt-5 mb-5'>
                        <Row className='ms-5 mt-5 mb-5'>
                            <Col className='mt-3'>
                            <Link to="/Passport" className="text-decoration-none">
                                <Card className='hover-effect' style={{ width: '18rem' }}>
                                <i class="bi bi-passport"></i>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold h5'>Passport</Card.Title>
                                        <Card.Text className='text-center text-muted'>Empowering Your Dreams to Soar Beyond Borders! Your Passport to Possibilities - Seamlessly delivered with expertise and care. From application to adventure, we've got you covered.</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Link>
                            </Col>

                            <Col className='mt-3'>
                            <Link to="/Currency" className="text-decoration-none">
                             <Card className='hover-effect' style={{ width: '18rem' }}>
                                <i class="bi bi-currency-exchange"></i>
                                    <Card.Body>
                                        <Card.Title  className='text-center fw-bold h5'>Currency Exchange</Card.Title>
                                        <Card.Text className='text-center text-muted'>Effortlessly exchange currencies at the best rates! Whether you're planning a trip abroad or handling international transactions, we make currency exchange simple, secure, and swift.</Card.Text>

                                    </Card.Body>
                                </Card> 
                            </Link>

                            </Col>

                            <Col className='mt-3'>
                            <Link to="/Visa" className="text-decoration-none">
                                <Card className='hover-effect' style={{ width: '18rem' }}>
                                <i class="bi bi-credit-card-2-front"></i>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold h5'>Visa</Card.Title>
                                        <Card.Text className='text-center text-muted'>Unlocking World Wonders, One Visa at a Time – Your Gateway to Global Adventures! Seamlessly navigating visas so you can explore with ease, because borders shouldn't hold you back.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                            </Col>
                        </Row>


                        {/* <Row className='ms-5 mt-5 mb-5'>
                            <Col className='mt-3'>
                                <Card className='hover-effect' style={{ width: '18rem' }}>
                                <i class="bi bi-luggage-fill"></i>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold h5'>Travel Insurance</Card.Title>
                                        <Card.Text className='text-center text-muted'>Travel Worry-Free, Stay Secure! Protect your journey with comprehensive travel insurance. From lost luggage to medical emergencies, we’ve got you covered for a stress-free adventure.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='mt-3'>
                                <Card className='hover-effect' style={{ width: '18rem' }}>
                                <i class="bi bi-airplane"></i>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold h5'>Flight Tickets</Card.Title>
                                        <Card.Text className='text-center text-muted'>Your skyward gateway! Book flights hassle-free with the best deals and smooth travel experiences. From budget-friendly to luxurious air travel, Enjoy a journey as comfortable as your destination.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='mt-3'>
                                <Card className='hover-effect' style={{ width: '18rem' }}>
                                <i class="bi bi-building"></i>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold h5'>Hotel</Card.Title>
                                        <Card.Text className='text-center text-muted'>Your Home Away from Home Awaits! Creating Memories One Stay at a Time – Relax, we'll take care of the rest. Unwind in style and luxury, because you deserve the finest.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row> */}
                    </div>
                </Row>


                    {/* Row2 */}


                <Row className='mt-5 mb-5'>
                    <Col md={6} className='mt-3'>
                    <Carousel fade>
                            <Carousel.Item>
                                <Image className='image-size' src={Serviceimg2} alt="Goa-img"></Image>
                                <Carousel.Caption>
                                    <h3 className='text-light fst-italic'>Goa</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className='image-size' src={Serviceimg3} alt="Kerala-img"></Image>
                                <Carousel.Caption>
                                    <h3 className='text-light fst-italic'>Kerala</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className='image-size' src={Serviceimg4} alt="Tamilnadu-img"></Image>
                                <Carousel.Caption>
                                    <h3 className='text-light fst-italic'>Tamilnadu</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6}>
                        <h3 className='mb-5 fw-light fst-italic text-warning display-5'>Domestic Travel - Discover India Like Never Before!</h3>
                        <p className='h5 fw-bold text-decoration-underline mb-3'>Why travel far when India's hidden gems await? Explore unforgettable domestic getaways with us!</p>
                        <p className='h5 fst-italic'><u>Top Destinations</u>: From the snowy peaks of Shimla & Manali to the sun-kissed beaches of Goa, experience the best of India. Cruise through Kerala’s serene backwaters or explore the royal heritage of Jaipur & Udaipur. Whether it’s guided city tours, adventure treks, or weekend getaways, we have the perfect trip for you!</p>
                    </Col>
                </Row>



                {/* Row3 */}




                <Row className='mt-5 mb-5'>
                    <Col md={6} className='mt-5 mb-5'>
                        <Image className='ms-4' style={{borderRadius:"20px"}} src={Servicelastimg} alt='Servicelastimg'/>
                    </Col>

                    <Col md={6} className='mt-5 mb-5'>
                    <Customerform/>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Services;
