import {
  Float,
  OrbitControls,
  Point,
  PointMaterial,
  PointMaterialImpl,
  Points,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { MeshPhysicalMaterial } from "three";

const Experience = () => {
  const texture = useTexture("/moon/textures/white_plaster_02_diff_1k.jpg");
  const rocket = useGLTF("/rocket/scene.gltf");
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const index = i * 3;
    positions[index + 0] = Math.random() * 4;
    positions[index + 1] = Math.random() * 4;
    positions[index + 2] = Math.random() * 4;
  }

  const moonRef = useRef();
  const stars = useRef();
  useFrame((state, delta) => {
    moonRef.current.rotation.z += 0.05 * delta;
    stars.current.rotation.z += 0.001 * delta;
  });
  return (
    <>
      <Sparkles size={4} scale={[10, 10, 10]} speed={0.1} ref={stars} />
      <Float speed={2}>
        <primitive
          object={rocket.scene}
          scale={0.4}
          position-x={100}
          position={[-1, 1, 0]}
          rotation-z={Math.PI * -0.35}
        ></primitive>
      </Float>
      <Float speed={0.1}>
        <mesh ref={moonRef} scale={5} position={[11, 6, -5]}>
          <sphereGeometry />
          <meshPhysicalMaterial
            map={texture}
            clearcoat={0}
            clearcoatRoughness={1}
            roughness={1}
            metalness={0.5}
          />
        </mesh>
      </Float>
    </>
  );
};

export default Experience;
