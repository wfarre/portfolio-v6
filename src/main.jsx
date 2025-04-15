import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience/Experience.jsx";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <div className="fixed top-0 left-0 h-[100vh] w-[100vw]">
      <Canvas className="h-full w-full" camera={[1, 1, 1]}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[1, 10, 1]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />

        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        <Experience />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>
      </Canvas>
    </div> */}
    <App />
  </>,
);
