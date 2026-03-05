import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="research-timeline">
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content text-left">
              <h3 className="purple">The Spark: Physics & Astrophysics</h3>
              <p>
                My journey began with a fundamental curiosity about the universe. I earned my 
                BSc in Physics with an Astrophysics concentration at <strong>Texas Tech University</strong>, 
                where I discovered that the most complex cosmic questions require the most 
                innovative computational solutions.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content text-left">
              <h3 className="purple">The Evolution: Deep Learning & Data</h3>
              <p>
                Transitioning into the world of AI, I focused on bridging the gap between raw 
                astronomical data and actionable insights. From analyzing Hubble Space Telescope 
                grism data to fine-tuning Transformer models, I specialize in applying 
                <strong> Machine Learning</strong> to push the boundaries of spectroscopic analysis.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content text-left">
              <h3 className="purple">Current Frontier: PhD at RIT</h3>
              <p>
                Now, as a PhD student at <strong>Rochester Institute of Technology</strong>, 
                I develop scalable frameworks for future missions like JWST and Roman, 
                automating high-precision analysis of large-scale spectroscopic data.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content text-left">
              <h3 className="purple">The Person Behind the Data</h3>
              <p>
                When I'm not in the lab, I stay balanced through movement and storytelling—whether 
                it's competing on the <strong>Raquetball and Soccer</strong> courts, 
                exploring digital worlds in <strong>PC games</strong>, or losing myself in 
                the pages of a <strong>novel</strong>.
              </p>
            </div>
          </div>

        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
