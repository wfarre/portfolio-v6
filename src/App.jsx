import React, { Suspense, useEffect, useRef, useState } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import gsap from "gsap";
import About from "./sections/About";
import Porfolio from "./sections/Porfolio";
import Contact from "./sections/Contact";
import { ReactLenis } from "lenis/react";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import CallToAction from "./sections/CallToAction";
import { useGSAP } from "@gsap/react";
import SectionTransition from "./components/layout/SectionTransition";

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
      <SectionTransition ref={transition} currentSection={currentSection} />
      <div className="relative mx-auto min-h-full scroll-smooth text-white">
        <Navbar getCurrentLink={(link) => setCurrentSection(link)} />
        <Hero />
        <main>
          <About />
          <Porfolio />
          <Contact />
        </main>
        <CallToAction />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
