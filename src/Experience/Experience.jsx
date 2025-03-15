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
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Camera, HemisphereLight, MeshPhysicalMaterial } from "three";

// const useResize = () => {
//   const [sizes, setSizes] = useState({
//     width: 0,
//     height: 0,
//   });

//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       setSizes({ width: window.innerWidth, height: window.innerHeight });
//     });
//   });
// };

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const useCursor = () => {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const [sizes, setSizes] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSizes({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursor({
        x: e.clientX / sizes.width - 0.5,
        y: e.clientY / sizes.height - 0.5,
      });
    });
  }, [sizes]);

  return [cursor, sizes];
};

const Experience = () => {
  const texture = useTexture("/moon/textures/white_plaster_02_diff_1k.jpg");
  const rocket = useGLTF("/rocket/scene.gltf");
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);
  const [cursor, sizes] = useCursor();
  console.log(cursor);
  console.log(sizes);

  for (let i = 0; i < particlesCount; i++) {
    const index = i * 3;
    positions[index + 0] = Math.random() * 4;
    positions[index + 1] = Math.random() * 4;
    positions[index + 2] = Math.random() * 4;
  }

  const canera = useThree((state) => state.camera);

  const moonRef = useRef();
  const stars = useRef();
  useFrame((state, delta) => {
    moonRef.current.rotation.z += 0.05 * delta;
    stars.current.rotation.z += 0.001 * delta;
    canera.position.y = -scrollY / sizes.height;

    const parallaxX = cursor.x;
    const parallaxY = cursor.y;
    canera.position.x = parallaxX;
    canera.position.y = parallaxY;
  });
  return (
    <>
      <Sparkles size={4} scale={[10, 10, 10]} speed={0.1} ref={stars} />
      <Float speed={2}>
        <primitive
          object={rocket.scene}
          scale={0.4}
          position-x={100}
          position={[0, 1, 0]}
          rotation-z={Math.PI * -0.35}
        ></primitive>
      </Float>
      <Float speed={0.1}>
        <mesh ref={moonRef} scale={5} position={[12, 8, -5]}>
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
