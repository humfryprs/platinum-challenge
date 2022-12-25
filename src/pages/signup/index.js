import { useState, React } from "react";
import "./style.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Signupkanan from "../../assets/images/login.svg";
import Logoregister from "../../assets/images/logo.svg";
import Closelogo from "../../assets/images/close.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/register", { role: "Admin", email, password })
      .then((res) => {
        // window.localStorage.setItem("access_token", res.data.access_token);
        // window.location.href = "/";
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="signup">
      <Container fluid>
        <Row>
          <Col className="signupleft" sm={12} lg={6} xl={6}>
            <div className="signupbox">
              <div className="signupkonten">
                <div className="logosignup">
                  <a href="/">
                    <img src={Logoregister} alt="BCR" className="homelogo" />
                  </a>
                  <img src={Closelogo} alt="close" className="closelogo" />
                </div>
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 email" controlId="formBasicEmail">
                    <Form.Label>
                      <h3>Name</h3>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Nama Lengkap" className="namaform" />
                    <Form.Label>
                      <h3>Email</h3>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                    {/* <Form.Text className="text-muted">
                            We'll........... nev,,,,,,,er share your email with anyone else.
                            </Form.Text> */}
                  </Form.Group>
                  <Form.Group className="mb-3 password" controlId="formBasicPassword">
                    <Form.Label>
                      <h3>Password</h3>
                    </Form.Label>
                    <Form.Control type="password" placeholder="6+ karakter  " onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                      <h2>Sign In</h2>
                    </Button>
                  </div>
                </Form>
                <div className="bawah-button">
                  <h3>Already have an account?</h3>
                  <h4>
                    <Link to="/sign-in" relative="path">
                      Sign In here
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col className="signupright" sm={0} lg={6} xl={6}>
            <img src={Signupkanan} alt="signup" title="registerpage" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
