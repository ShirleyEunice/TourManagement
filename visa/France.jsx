import React from 'react'
import { Container, Row, Col, CardFooter } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Customerform from '../services/Customerform'


const France = () => {
    return (
        <div>
            <div className='div2 header-image mb-5'>
                <h1 className='display-4 fw-bold text-white mt-5'>France</h1>
                <p className='h4 fw-bold text-white'>"Pricing Starting From ₹1199"</p>
            </div>
            <Container>
                <Row className='mb-5'>
                    <Col className='mt-3 mb-5 ms-5'>
                        <Card className='hover-effect' style={{ width: '18rem' }}>
                            <Card.Body className='bg-warning bg-opacity-50 '>
                                <Card.Header className='text-center fw-bold h5 bg-warning'>France (popular)</Card.Header>
                                <Card.Body>
                                    <p><strong>Process Time:</strong> 4 to 7 Days</p>
                                    <p><strong>Stay Period:</strong> As Per Embassy</p>
                                    <p><strong>Validity:</strong> Upto 30 Days</p>
                                    <p><strong>Type:</strong> Tourist</p>
                                    <p><strong>Entry:</strong> Single</p>
                                <CardFooter><p className='text-center fw-bold h5 bg-warning'><strong>Fees:</strong> INR 1199/-</p></CardFooter>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                        <br />
                        <div>
                        <h1 className='mt-5 display-5 fw-bold fst-italic'>Embassy</h1>
                        <h1 className='display-6 fw-bold fst-italic'>Douments for France</h1>
                        </div>
                    </Col>
                    <Col md={6}>
                    <Customerform/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default France