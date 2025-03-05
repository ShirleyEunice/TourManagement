
import React from "react";
import '../testimonals/testimonals.css'
import { Container, Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";




const Testimonals = () => {
  const testimonial = [
    {
      id: 1,
      name: "John",
      location: "India,Kerala",
      text: "This was the most amazing tour I've ever been on! Everything was well-planned, and the guide was so knowledgeable. Highly recommended!",
      image: "https://www.amity.edu/gurugram/microbackoffice/uploads/testimonialimage/98testi_rajivbasavaalumni.jpg",
    },
    {
      id: 2,
      name: "Sathish",
      location: "India,Delhi",
      text: "Had a great time on the trip. The destinations were beautiful and well worth the visit. Would love to travel with you again.",
      image: "https://th.bing.com/th/id/OIP.AuyJ5r1kYYLCTevNiHr7IAHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Sanjay Kumar",
      location: "India,TamilNadu",
      text: "A fantastic experience! The team took care of every detail, and we had a wonderful time. I can't wait for the next adventure.",
      image: "https://imageio.forbes.com/specials-images/imageserve/64395e98abd4d974dd6b19cc/0x0.jpg?format=jpg&crop=733,732,x57,y50,safe&width=300",
    },
    {
      id: 4,
      name: "Janaki",
      location: "India, Pune",
      text: "A very well-organized tour! Everything from the transport to the activities was top-notch. I had a wonderful time exploring the sights.",
      image: "https://th.bing.com/th/id/OIP.ZXZXGj9nWdDw6HnzfaGKDgAAAA?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <>    <div className="testimonial-container">
      <h1 className="testimonial-heading">What Our Travelers Say</h1>
      <p className="testimonial-intro">
        Hear from our happy travelers and learn why GoGlobe Tours is their preferred travel partner.
      </p>

      <div className="testimonial-cards">
        {testimonial.map((details) => (
          <div key={details.id} className="testimonial-card">
            <img src={details.image}  className="testimonial-img" />
            <div className="testimonial-content">
              <h3>{details.name}</h3>
              <p className="testimonial-location">{details.location}</p>
              <p className="testimonial-text">{details.text}</p>
            </div>
          </div>
        ))}
      </div>
{/* ---------------review cards------------------------------------------------------------------ */}
      <div>
            <Container style={{backgroundColor: "#f5f5f5"}}>
                <h2 className='pt-3 d-flex justify-content-center fst-italic text-warning'>Drop Your Review here</h2>
                {/* <p className='h6 text-muted'>Reach out for customized travel recommendations, group travel assistance, or last-minute deals, with full insurance and safety guaranteed.</p> */}
                <Form className='d-inline'>
                    <InputGroup className="mt-5">
                        <InputGroup.Text><i class="bi-person"></i><FaUserAlt /></InputGroup.Text>
                        <Form.Control placeholder="Name" aria-label="Name" />
                    </InputGroup>

                    <InputGroup className="mt-5 ">
                        <InputGroup.Text><i class="bi-telephone"></i><FaPhoneAlt /></InputGroup.Text>
                        <Form.Control placeholder="Phone Number" aria-label="EPhone Number" />
                    </InputGroup>

                    <InputGroup className="mt-5">
                        <InputGroup.Text id="basic-addon1"><b>@</b></InputGroup.Text>
                        <Form.Control placeholder="Email" aria-label="Email" />
                    </InputGroup>

                    <FloatingLabel className="mt-5 mb-3" controlId="floatingTextarea2" label="Your Message">
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <InputGroup className="mt-3 pb-3 justify-content-center">
                        <Button type="submit" variant="warning">Summit</Button>
                    </InputGroup>
                </Form>
            </Container>
        </div>
{/* ---------review summiting form--------------------------------------- */}
      <div className="testimonial-cta">
        <p>Ready to explore the world? <a href="/contact">Get in touch</a> and start planning your adventure today!</p>
      </div>
    </div>
{/* --------footer-------------------------------------------------------- */}
    
    
    </>

  );
};

export default Testimonals;










  
