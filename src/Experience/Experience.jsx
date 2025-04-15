import { Float, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { useCursor } from "../libs/hooks/useCursor";
import { useScroll } from "../libs/hooks/useScroll";

import Earth from "./Earth";
import Rocket from "./Rocket";
import Moon from "./Moon";

const Experience = () => {
  const scrollY = useScroll();
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);
  const [cursor, sizes] = useCursor();

  for (let i = 0; i < particlesCount; i++) {
    const index = i * 3;
    positions[index + 0] = Math.random() * 4;
    positions[index + 1] = Math.random() * 4;
    positions[index + 2] = Math.random() * 4;
  }

  const canera = useThree((state) => state.camera);
  const moonRef = useRef();
  const stars = useRef();
  const earthRef = useRef();
  useFrame((state, delta) => {
    moonRef.current.rotation.z += 0.05 * delta;
    earthRef.current.rotation.x -= 0.05 * delta;
    earthRef.current.rotation.z -= 0.05 * delta;
    canera.position.z = scrollY / sizes.height;

    const parallaxX = cursor.x;
    const parallaxY = cursor.y;
    canera.position.x = parallaxX;
    canera.position.y = parallaxY;
  });
  return (
    <>
      <Sparkles size={4} scale={[20, 20, 20]} speed={0.1} ref={stars} />
      <Float speed={1}>
        <Rocket />
      </Float>
      <Float speed={0.1}>
        <Moon ref={moonRef} scale={1.5} position={[6, 2.5, -4]} />
      </Float>
      <Earth ref={earthRef} position={[0, -2, 2]} scale={1.5} />
    </>
  );
};

export default Experience;
