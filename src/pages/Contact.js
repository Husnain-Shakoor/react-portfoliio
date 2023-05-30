import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./styles/contact.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div id="MainContainer">
      <div className="form-sizing">
        <Form className="myForm" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInput}
              placeholder="Enter Your Name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInput}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInput}
              placeholder="Enter Your Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
