import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import gsap from "gsap";
import About from "./sections/About";
import Porfolio from "./sections/Porfolio";
import Contact from "./sections/Contact";
import { ReactLenis } from "lenis/react";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import CallToAction from "./sections/CallToAction";
import { useGSAP } from "@gsap/react";

const App = () => {
  const lenisRef = useRef();
  const transition = useRef();

  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  const timeline = gsap.timeline();

  useGSAP(() => {
    if (currentSection) {
      timeline
        .to(transition.current, {
          scaleX: 1,
          duration: 0.3,
          transformOrigin: "right",
        })
        .to(transition.current, {
          scaleX: 1,
          duration: 0.5,
        })
        .to(transition.current, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.3,
        });
    }
  }, [currentSection]);

  return (
    <ReactLenis root>
      <div
        ref={transition}
        className={`fixed top-[50%] left-0 z-50 flex h-[95vh] w-[100vw] origin-right translate-y-[-50%] scale-x-0 items-center justify-center bg-white`}
      >
        <h2 className="font-title text-5xl text-slate-950 uppercase">
          {currentSection}
        </h2>
      </div>
      <div className="relative min-h-full scroll-smooth text-white">
        <Navbar getCurrentLink={(link) => setCurrentSection(link)} />
        <Hero />
        <main>
          <About />
          <Porfolio />
          <Contact />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
