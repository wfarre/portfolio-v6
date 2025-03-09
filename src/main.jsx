import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience.jsx";
import NewApp from "./NewApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="fixed w-[100vw] h-[100vh] top-0 left-0">
      <Canvas className="w-full h-full">
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <OrbitControls />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Experience />
      </Canvas>
    </div>

    {/* <App /> */}

    <NewApp className="" />
  </StrictMode>
);
