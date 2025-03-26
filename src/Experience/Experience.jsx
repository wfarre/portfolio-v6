import {
  Float,
  ScrollControls,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { useCursor } from "../libs/hooks/useCursor";
import { useScroll } from "../libs/hooks/useScroll";
import { TextureLoader } from "three";
import * as THREE from "three";
import earthFragment from "../shaders/earthHalo/fragment.glsl";
import earthVertex from "../shaders/earthHalo/vertex.glsl";
import { getFresnelMat } from "../shaders/getFresnelMat";

const Experience = () => {
  const texture = useTexture("/moon/moonmap1k.jpg");
  const scrollY = useScroll();

  console.log(scrollY);

  const rocket = useGLTF("/rocket/scene.gltf");
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);
  const [cursor, sizes] = useCursor();
  const earthTexture = useLoader(TextureLoader, "earth/earthmap1k.jpg");
  const cloudMap = useLoader(TextureLoader, "/earth/earthcloudmap.jpg");
  const cloudAlpha = useLoader(TextureLoader, "/earth/earthcloudmap.jpg");

  const earthNormal = useLoader(TextureLoader, "/earth/earthspec1k.jpg");
  const fresnelMat = getFresnelMat();

  for (let i = 0; i < particlesCount; i++) {
    const index = i * 3;
    positions[index + 0] = Math.random() * 4;
    positions[index + 1] = Math.random() * 4;
    positions[index + 2] = Math.random() * 4;
  }

  const uniforms = {
    color1: { value: new THREE.Color(0x0088ff) },
    color2: { value: new THREE.Color(0x000000) },
    fresnelBias: { value: 0.1 },
    fresnelScale: { value: 1.0 },
    fresnelPower: { value: 4.0 },
  };

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
        <primitive
          object={rocket.scene}
          scale={0.4}
          position-x={100}
          position={[0, 1, -5]}
          rotation-z={Math.PI * -0.35}
        ></primitive>
      </Float>
      <Float speed={0.1}>
        <mesh ref={moonRef} scale={1.5} position={[7, 3, -4]}>
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

      <group ref={earthRef} position={[0, -2, 2]} scale={1.5}>
        {/* <mesh scale={1.5}>
          <sphereGeometry meshPhysicalMaterial={fresnelMat} />
          <rawShaderMaterial
            vertexShader={earthVertex}
            vertexColors={earthFragment}
            uniforms={uniforms}
          />
        </mesh> */}
        <mesh scale={1.01}>
          <sphereGeometry />
          <meshStandardMaterial
            map={cloudMap}
            transparent={true}
            opacity={0.8}
            blending={THREE.AdditiveBlending}
            alphaMap={cloudAlpha}
          />
        </mesh>
        <mesh scale={1.01}>
          <sphereGeometry />
          <meshStandardMaterial
            map={cloudMap}
            transparent={true}
            opacity={0.8}
            blending={THREE.AdditiveBlending}
            alphaMap={cloudAlpha}
          />
        </mesh>
        <mesh>
          <sphereGeometry />
          <meshPhysicalMaterial
            map={earthTexture}
            alphaMap={earthNormal}
            alph
            clearcoat={0}
            clearcoatRoughness={0.1}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
        <pointLight size={(1, 1, 1)} intensity={100} />
      </group>
    </>
  );
};

export default Experience;
