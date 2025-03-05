import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const Customerform = () => {
    return (
        <div>
            <Container style={{backgroundColor: "#f3e0cc"}}>
                <h2 className='pt-3 d-flex justify-content-center fst-italic text-warning'>Plan the Ultimate Trip</h2>
                <p className='h6 text-muted'>Reach out for customized travel recommendations, group travel assistance, or last-minute deals, with full insurance and safety guaranteed.</p>
                <Form className='d-inline'>
                    <InputGroup className="mt-5">
                        <InputGroup.Text><i class="bi-person"></i></InputGroup.Text>
                        <Form.Control placeholder="Name" aria-label="Name" />
                    </InputGroup>

                    <InputGroup className="mt-5 ">
                        <InputGroup.Text><i class="bi-telephone"></i></InputGroup.Text>
                        <Form.Control placeholder="Phone Number" aria-label="EPhone Number" />
                    </InputGroup>

                    <InputGroup className="mt-5">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control placeholder="Email" aria-label="Email" />
                    </InputGroup>

                    <FloatingLabel className="mt-5 mb-3" controlId="floatingTextarea2" label="Your Message">
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <InputGroup className="mt-3 pb-3 justify-content-center">
                        <Button type="submit" variant="warning">Send</Button>
                    </InputGroup>
                </Form>
            </Container>
        </div>
    )
}

export default Customerform