import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Currencyexchange1 from "../../Assets/Currencyexchange1.jpg"
import Image from 'react-bootstrap/Image'


const Currency = () => {
    return (
        <div>
            <div className='div2 header-image mb-5'>
                <h1 className='display-4 fw-bold text-white mt-5'>Currency Exchange</h1>
            </div>
                <Container>
                <Row className='mb-5'>
                    <Col md={6}>
                    <Image src={Currencyexchange1} alt="Passport" style={{width:"100% ", height:"100%", borderRadius:"20px"}} ></Image>
                    </Col>
                    <Col className='ms-5'>
                        <h1 className="pt-3">Get the Best Exchange Rates Instantly</h1>
                       <p display-5>Currency exchange is an essential service for travelers, allowing them to convert their money into the local currency of their destination at competitive exchange rates. Whether you're traveling for leisure or business, having the right currency ensures a hassle-free experience while making payments abroad. Our currency exchange services offer real-time rates, secure transactions, and multiple currency options to meet your travel needs. With easy online booking and fast processing, you can exchange your currency conveniently before your trip. For more details on exchange rates and available currencies, contact our support team or fill out the inquiry form below.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Currency