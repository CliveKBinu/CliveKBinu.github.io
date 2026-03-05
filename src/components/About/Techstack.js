import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiGit,
  DiMarkdown,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiLatex
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons python-icon">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons git-icon">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons markdown-icon">
        <DiMarkdown />
      </Col>
      <Col xs={4} md={2} className="tech-icons cpp-icon">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons nextjs-icon">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons latex-icon">
        <SiLatex />
      </Col>
    </Row>
  );
}

export default Techstack;
