import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Sns from "./components/Sns";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NewApp = () => {
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
    <div className="text-white relative min-h-full">
      <Navbar />

      <header className="">
        <ul className="text-sm sm:text-lg mt-10 sm:mt-20 font-title flex justify-between md:flex-col gap-2">
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
        <div className="text-center title-wrapper relative mt-100">
          <h1
            ref={mainTitleRef}
            className="text-white tracking-wide uppercase font-title"
          >
            William Farre
          </h1>
          <div
            ref={headerFooterRef}
            className="flex-col flex sm:flex-row items-center justify-between flex-wrap"
          >
            <p className="text-sm sm:text-lg font-title mb-4 sm:mb-0">
              FRONTEND DEVELOPER
            </p>
            <Sns />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NewApp;
