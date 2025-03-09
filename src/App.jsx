import { useRef } from "react";
import "./App.css";
import Arrow from "./assets/arrow.svg";
import Sns from "./components/Sns";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  gsap.registerPlugin(useGSAP);
  const design = useRef();
  const arrow = useRef();
  const websites = useRef();

  // useGSAP(() => {
  //   gsap.from(design.current, {
  //     opacity: 0,
  //     duration: 2,
  //   });

  //   gsap.from(arrow.current, {
  //     scaleX: 0,
  //     x: -300,
  //     rotateX: 180,
  //     duration: 1,
  //     delay: 0.2,
  //   });

  //   gsap.from(websites.current, {
  //     x: -200,
  //     opacity: 0,
  //     duration: 1,
  //     delay: 0.3,
  //   });
  // });

  return (
    <>
      <nav>
        <ul className="flex gap-5 md:gap-8 justify-center mt-6 md:mt-20">
          <li>
            <a className=" cursor-pointer">Home</a>
          </li>
          <li>
            <a className=" cursor-pointer">About</a>
          </li>
          <li>
            <a className=" cursor-pointer">Portfolio</a>
          </li>
          <li>
            <a className=" cursor-pointer">Contact</a>
          </li>
        </ul>
      </nav>
      <header className="mt-20 md:mt-32 flex justify-center">
        <div className="">
          <p className="text-center md:text-left mb-4 md:mb-0">
            HI THERE! 👋 I’M WILLIAM,
            <br /> A FRONTEND DEVELOPER TURNING
          </p>

          <div className="flex flex-col">
            <h1
              ref={design}
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
            >
              DESIGNS
            </h1>
            <div className="relative flex items-center md:bottom-[75px] lg:bottom-[100px]">
              <div className="relative flex items-center justify-center w-full md:w-[400px] lg:w-[540px] aspect-[590/251]">
                <p className="absolute hidden md:block text-white z-50 text-3xl uppercase">
                  into
                </p>
                <img
                  className="arrow absolute left-0 top-0 w-full h-full "
                  src={Arrow}
                  ref={arrow}
                />
              </div>
              <h1
                ref={websites}
                className="text-5xl md:text-7xl lg:text-8xl font-bold"
              >
                WEBSITES
              </h1>
            </div>
          </div>
          <Sns />

          <button className="cursor-pointer block mt-12 bg-black text-white uppercase text-base  md:text-2xl md:w-[280px] h-12 md:h-16 rounded-[20px] w-[140px] mx-auto md:mr-0 font-bold">
            Contact me
          </button>
        </div>
      </header>
    </>
  );
}

export default App;
