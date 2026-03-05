import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      // Gradual fade out (fully gone by 60% of viewport height)
      const newOpacity = Math.max(0, 1 - (scrollY / (windowHeight * 0.6)));
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <Container fluid className="home-section full-height-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-center">
            <Col md={10} className="home-header text-center">
              <h1 style={{ paddingBottom: 15 }} className="heading entry-animate delay-1">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name entry-animate delay-2">
                I'M
                <strong className="main-name"> Clive Kalathoor Binu</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }} className="entry-animate delay-3">
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
        
        {/* Scroll Down Indicator with dynamic opacity */}
        <div 
          className="scroll-down" 
          onClick={scrollToAbout}
          style={{ 
            opacity: scrollOpacity,
            visibility: scrollOpacity <= 0.01 ? "hidden" : "visible",
            pointerEvents: scrollOpacity <= 0.5 ? "none" : "auto"
          }}
        >
          <div className="mouse"></div>
          <div className="arrow"></div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
