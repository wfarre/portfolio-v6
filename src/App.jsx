import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Sns from "./components/Sns";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import About from "./About";
import Porfolio from "./Porfolio";

const App = () => {
  const skill1 = useRef();
  const skill2 = useRef();
  const skill3 = useRef();
  const mainTitleRef = useRef();
  const headerFooterRef = useRef();

  useGSAP(() => {
    gsap.from(skill1.current, { opacity: 0, y: -16, duration: 0.9 });
    gsap.from(skill2.current, {
      opacity: 0,
      y: -16,
      duration: 0.9,
      delay: 0.3,
    });
    gsap.from(skill3.current, {
      opacity: 0,
      y: -16,
      duration: 0.9,
      delay: 0.6,
    });
    gsap.from(mainTitleRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.9,
      delay: 0.9,
    });
    gsap.from(headerFooterRef.current, {
      y: 16,
      opacity: 0,
      duration: 0.9,
      delay: 0.6,
    });
  });

  return (
    <div className="relative min-h-full scroll-smooth text-white">
      <Navbar />

      <header className="header">
        <ul className="font-title mt-25 flex justify-between gap-2 text-sm sm:mt-20 sm:flex-col sm:text-lg">
          <li ref={skill1} className="skill">
            FRONTEND
          </li>
          <li ref={skill2} className="skill">
            BACKEND
          </li>
          <li ref={skill3} className="skill">
            UI/UX
          </li>
        </ul>
        <div className="title-wrapper relative text-center">
          <h1
            ref={mainTitleRef}
            className="font-title tracking-wide text-white uppercase"
          >
            William Farre
          </h1>
          <div
            ref={headerFooterRef}
            className="flex flex-col flex-wrap items-center justify-between sm:flex-row"
          >
            <p className="font-title mb-4 text-sm sm:mb-0 sm:text-lg">
              FRONTEND DEVELOPER
            </p>
            <Sns />
          </div>
        </div>
      </header>

      <main>
        <About />
        <Porfolio />
      </main>
    </div>
  );
};

export default App;
