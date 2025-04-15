import { useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Earth = ({ ref, position, scale }) => {
  const earthTexture = useLoader(
    TextureLoader,
    "/assets/models/earth/earthmap1k.jpg",
  );
  const cloudMap = useLoader(
    TextureLoader,
    "/assets/models/earth/earthcloudmap.jpg",
  );
  const cloudAlpha = useLoader(
    TextureLoader,
    "/assets/models/earth/earthcloudmap.jpg",
  );
  const earthNormal = useLoader(
    TextureLoader,
    "/assets/models/earth/earthspec1k.jpg",
  );
  return (
    <Suspense fallback={null}>
      <group ref={ref} position={position} scale={scale}>
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
    </Suspense>
  );
};

export default Earth;
