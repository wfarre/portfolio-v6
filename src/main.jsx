import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience/Experience.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw]">
      <Canvas className="h-full w-full">
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        {/* <OrbitControls /> */}
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Experience />
      </Canvas>
    </div>
    <App className="" />
  </StrictMode>,
);
