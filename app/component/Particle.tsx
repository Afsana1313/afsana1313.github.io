"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            zIndex: 0
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: "#000000"
              },

              move: {
                direction: "bottom",
                enable: true,
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true
                },
                value: 80
              },
              opacity: {
                value: 0.1
              },
              shape: {
                type: "circle"
              },
              size: {
                value: { min: 1, max: 10 }
              }
            },
            detectRetina: true
          }}
        />
      )}
    </>
  );
};
export default Particle;
