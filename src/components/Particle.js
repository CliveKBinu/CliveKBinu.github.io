import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 0.6,
            straight: false,
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false
            }
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false, // Removed bubble interaction
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
