import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Galaxy CNN"
              description="Developed Deep Learning model which is used to classify 
              galaxies based on their morphology. This model was built using 
              transfer learning and the parent model that is used to built is 
              VGG16 and the dataset was obtained from galaxy zoo"
              // ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="VLA RFI GUI"
              description="Developed a graphical user interface (GUI) 
              which can be used to look at radio freqeuncy interfernce 
              (RFI) from Very Large Array Telescope (VLA) RFI scans and 
              can be used to further analysis of these data. "
              ghLink="https://github.com/CliveKBinu/VLA-RFI-GUI"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Machine Learning in Muon Tomography"
              description="Implementation of machine learning concepts in
              muon tomography like object detection, image classification and 
              image resolution enhancing that helps in the 3D reconstruction of the scanned"
              ghLink="https://github.com/CliveKBinu/Tomogram-3D-recon-module"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Impact of Star-Link on the VLA"
              description="
              This project is focused on studying the impact of RFI on 
              data collection at the Jansky Very Large Array (VLA). 
              This study was carried out mainly by conducting a series of 
              measurements in collaboration with SpaceX, and through 
              analyzing and comparing the data from the VLA with telemetry provided by SpaceX."
              ghLink="https://github.com/CliveKBinu/Starlink_RFI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="High Speed semiconductor switch"
              description="
              Semiconductor switches are devices that produce short RF pulses in the microwave 
              to the infrared frequency. A septum model consisting of silicon is created and is 
              illuminated with a laser. The attenuation vs power graph is then plotted."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="N-Body Simulation"
              description="
             N-Body Simulation uses python to solve for equations of motion for N-particles 
            interacting gravitationally using the Runga Kutta method to solve for the equations of 
            motion. The result is visualized using 3D animation using matplotlib."
              ghLink="https://github.com/CliveKBinu/N-Body-Simulation"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
