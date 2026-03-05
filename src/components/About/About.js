import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg"; 

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
          The Person Behind the <strong className="purple">Science</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center",
              paddingTop: "50px" 
            }}
            className="about-img"
          >
            <Tilt>
              <img src={myImg} alt="about" className="img-fluid profile-pic" />
            </Tilt>
          </Col>
        </Row>
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
