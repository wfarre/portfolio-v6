import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Sns from "./components/Sns";

const NewApp = () => {
  return (
    <div className="text-white relative min-h-full">
      <Navbar />

      <header className="">
        <ul className="text-sm sm:text-lg mt-10 sm:mt-20 font-title flex justify-between md:flex-col gap-2">
          <li className="skill">FRONTEND</li>
          <li className="skill">BACKEND</li>
          <li className="skill">UI/UX</li>
        </ul>
        <div className="text-center title-wrapper relative mt-100">
          <h1 className="text-white tracking-wide uppercase font-title">
            William Farre
          </h1>
          <div className="flex-col flex sm:flex-row items-center justify-between flex-wrap">
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
