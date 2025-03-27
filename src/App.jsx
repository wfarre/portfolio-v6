import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Sns from "./components/Sns";
import gsap from "gsap";
import About from "./sections/About";
import Porfolio from "./sections/Porfolio";
import Contact from "./sections/Contact";
import { ReactLenis } from "lenis/react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import CallToAction from "./sections/CallToAction";

const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root>
      <div className="relative min-h-full scroll-smooth text-white">
        <Navbar />
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
