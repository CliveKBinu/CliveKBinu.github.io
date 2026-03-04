import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="SpecPT (Spectroscopic Pre-Trained Transformer)"
              description="Adapted a deep learning Transformer model to analyze Hubble Space Telescope grism data. By fine-tuning a model pre-trained on DESI ground-based spectra, I improved redshift prediction NMAD from 0.2095 to 0.0039 and reduced catastrophic outliers to 2.3% using photometric flux."
              // ghLink="https://github.com/CliveKBinu/SpecPT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Galaxy CNN"
              description="Developed a Deep Learning model to classify galaxies based on their morphology using transfer learning. Built on the VGG16 architecture and trained on the Galaxy Zoo dataset, the model identifies structural features to categorize various celestial objects with high precision."
              // ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="VLA RFI GUI"
              description="Developed a Python-based graphical user interface (GUI) to visualize and analyze radio frequency interference (RFI) from the Very Large Array (VLA) telescope. The tool enables researchers to identify interference patterns and perform detailed data quality assessments."
              ghLink="https://github.com/CliveKBinu/VLA-RFI-GUI"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Machine Learning in Muon Tomography"
              description="Implemented machine learning concepts in muon tomography, including object detection and image resolution enhancement. This research facilitates the 3D reconstruction of scanned objects, improving the accuracy of density mapping for archaeological and industrial applications."
              ghLink="https://github.com/CliveKBinu/Tomogram-3D-recon-module"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Impact of Star-Link on the VLA"
              description="Studied the impact of Starlink satellite constellations on data collection at the Jansky Very Large Array. Conducted measurements in collaboration with SpaceX to analyze RFI patterns, comparing astronomical data with satellite telemetry to mitigate interference."
              ghLink="https://github.com/CliveKBinu/Starlink_RFI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="High Speed semiconductor switch"
              description="Researched semiconductor switches that produce short RF pulses from microwave to infrared frequencies. Developed a silicon-based septum model illuminated by laser pulses and analyzed the resulting attenuation vs. power characteristics to optimize switching performance."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="N-Body Simulation"
              description="Developed an N-Body simulation in Python to solve equations of motion for particles interacting gravitationally. Utilizing the Runge-Kutta numerical method, the system simulates complex orbital dynamics and visualizes the results through interactive 3D Matplotlib animations."
              ghLink="https://github.com/CliveKBinu/N-Body-Simulation"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
