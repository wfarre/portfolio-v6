import { useGLTF } from "@react-three/drei";
import React from "react";

const Rocket = () => {
  const rocket = useGLTF("/assets/models/rocket/scene.gltf");

  return (
    <primitive
      object={rocket.scene}
      scale={0.4}
      position-x={100}
      position={[0, 1, -5]}
      rotation-z={Math.PI * -0.35}
    ></primitive>
  );
};

export default Rocket;
