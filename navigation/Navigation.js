import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './navigation.css';
import { Link } from 'react-router-dom';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

const Navigation = () => {
  return (
    <div>
      <Navbar bg='warning' expand="lg" className="bg-body-tertiary justify-content-between py-3" sticky='top'>
        <Container fluid className='carousel'>
          {/* Logo */}
          <Navbar.Brand href="#home" className='mx-4'>
            <img
              src="./img/logo.png"
              alt="Logo"
              style={{ width: '100px', height: 'auto' }}
            />
          </Navbar.Brand>

          {/* Hamburger Menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className='me-5'>Home</Nav.Link>
              
              {/* About Dropdown */}
              <NavDropdown title="About" id="about-dropdown" className='me-5'>
                <NavDropdown.Item as={Link} to="/our-company">Our Company</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item as={Link} to="/testimonals">Testimonials</NavDropdown.Item>
              </NavDropdown>

              {/* Packages Dropdown */}
              <NavDropdown title="Packages" id="packages-dropdown" className='me-5'>
                <NavDropdown.Item as={Link} to="/international">International</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item as={Link} to="/domestic">Domestic</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/honeymoon" className='me-5'>Honeymoon</Nav.Link>
              <Nav.Link as={Link} to="/visa" className='me-5'>Visa</Nav.Link>
              <Nav.Link as={Link} to="/services" className='me-5'>Services</Nav.Link>

              {/* Contact Dropdown */}
              <NavDropdown title="Contact" id="contact-dropdown" className='me-5'>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item as={Link} to="/coimbatore">Coimbatore</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item as={Link} to="/trichy">Trichy</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Login and Register Links in warning color */}
            <Nav>
              <Nav.Link as={Link} to="/login" className='me-3 text-warning'>Login</Nav.Link>
              <Nav.Link as={Link} to="/register" className='me-3 text-warning'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
