import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="home-about-description text-center">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body text-center">
              I fell in love with space and programming and they go hand in hand 
              quite nicely.
              <br />
              <br />I am familair in classics like
              <i>
                <b className="purple"> Python, C++ and Latex. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="purple">Machine Learining or Deep Learning models</b> for 
                applications in physics and astrophysics
                <b className="purple">
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply 
              my passion for automating tasks
              with <b className="purple">Python</b> and other programming like
              <i>
                <b className="purple">
                  {" "}
                  bash.
                </b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CliveKBinu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/clive_k_binu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
