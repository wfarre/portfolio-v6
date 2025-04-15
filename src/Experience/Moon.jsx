import { useTexture } from "@react-three/drei";
import React, { Suspense } from "react";

const Moon = ({ ref, scale, position }) => {
  const texture = useTexture("/assets/models/moon/moonmap1k.jpg");

  return (
    <Suspense fallback={null}>
      <mesh ref={ref} scale={scale} position={position}>
        <sphereGeometry />
        <meshPhysicalMaterial
          map={texture}
          clearcoat={0}
          clearcoatRoughness={0.5}
          roughness={0.9}
          metalness={0.5}
        />
      </mesh>
    </Suspense>
  );
};

export default Moon;
