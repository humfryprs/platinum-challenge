import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Loginkanan from "../../assets/images/image2.png";
import Logologin from "../../assets/images/logo.png";
import "./style.css";

const CMSsignin = () => {
  return (
    <section className="cms-signin">
      <Container fluid>
        <Row>
          <Col className="loginright" sm={0} lg={6} xl={6}>
            <img src={Loginkanan} alt="Login" title="loginpage" />
          </Col>
          <Col className="loginleft" sm={12} lg={6} xl={6}>
            <div className="loginbox">
              <div className="loginkonten">
                <div className="logologin">
                  <a href="/">
                    <img src={Logologin} alt="BCR" className="homelogo" />
                  </a>
                </div>
                <h1>Welcome Back, Admin BCR </h1>
                <Form>
                  <Form.Group className="mb-3 email" controlId="formBasicEmail">
                    <Form.Label>
                      <h3>Email</h3>
                    </Form.Label>
                    <Form.Control type="email" placeholder="admin@mail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3 password" controlId="formBasicPassword">
                    <Form.Label>
                      <h3>Password</h3>
                    </Form.Label>
                    <Form.Control type="password" placeholder="6+ karakter" />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                      <h2>Sign In</h2>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CMSsignin;
