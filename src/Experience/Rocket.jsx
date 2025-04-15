import { useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const Rocket = () => {
  const rocket = useGLTF("/assets/models/rocket/scene.gltf");

  return (
    <Suspense fallback={null}>
      <primitive
        object={rocket.scene}
        scale={0.4}
        position-x={100}
        position={[0, 1, -5]}
        rotation-z={Math.PI * -0.35}
      ></primitive>
    </Suspense>
  );
};

export default Rocket;
