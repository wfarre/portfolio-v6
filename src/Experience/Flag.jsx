import React, { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import vertexShader from "../shaders/flag/vertex.glsl";
import fragmentShader from "../shaders/flag/fragment.glsl";
import * as THREE from "three";
import { TextureLoader } from "three";

const Flag = (props) => {
  const materialRef = useRef();
  const flagTexture = useLoader(TextureLoader, props.picture);

  const uniforms = useMemo(() => {
    return {
      uFrequency: {
        value: new THREE.Vector2(10, 5),
      },
      uTime: {
        value: 0,
      },
      uTexture: {
        value: flagTexture,
      },
    };
  }, [flagTexture]);

  useFrame((state, delta) => {
    materialRef.current.uniforms.uTime.value += delta;
  });
  return (
    <>
      <mesh>
        <planeGeometry args={[1, 1, 64, 64]} />
        <rawShaderMaterial
          ref={materialRef}
          color={"pink"}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

export default Flag;
