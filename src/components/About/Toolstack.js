import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows11,
  SiSlack,
  SiDiscord,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons macos-icon">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons vscode-icon">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons windows-icon">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons slack-icon">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons discord-icon">
        <SiDiscord />
      </Col>
    </Row>
  );
}

export default Toolstack;
