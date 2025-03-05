import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Save user credentials in localStorage
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("userPassword", formData.password);

      alert("Signup Successful!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setErrors({});
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center">Signup</h1>
          <div className="signup-underline"></div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-inputs">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form-inputs">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form-inputs">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form-inputs">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Your Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              type="submit"
              className="form-input-btn w-100 my-5"
              style={{ backgroundColor: "#FEBE10" }}
            >
              Signup
            </Button>
            <p className="text-center mt-3 py-3">
              Already have an account? <a href="/login">Login</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
