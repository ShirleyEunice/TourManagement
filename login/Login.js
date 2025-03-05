import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Get stored credentials
      const storedEmail = localStorage.getItem("userEmail");
      const storedPassword = localStorage.getItem("userPassword");

      const adminUser = 'admin@gmail.com';
      const adminPassword = 'admin@123'


      // Check if entered credentials match stored credentials
      if (formData.email === storedEmail && formData.password === storedPassword) {
        alert("Login Successful!");
        navigate("/"); // Redirect to homepage or dashboard
      }
      else if (formData.email === adminUser && formData.password === adminPassword){
        alert("Admin Login Successful!");
        navigate("/admin"); // Redirect to admin dashboard

      }
      else {
        alert("Invalid Email or Password!");
      }
    }
  };

  return (
    <Container className="form-container">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Form onSubmit={handleSubmit} className="form">
            <h1 className="text-center mb-4 py-5">Login</h1>
            <div className="underline"></div>

            <Form.Group controlId="formEmail" className="form-inputs">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="form-inputs">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Button className="form-input-btn w-100 btn-warning my-5" type="submit">
              Login
            </Button>

            <p className="text-center mt-3">
              Don't have an account? <a href="/register">SignUp</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
