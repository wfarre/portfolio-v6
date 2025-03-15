import React, { useRef, useState } from "react";
import {
  css,
  github,
  html,
  javascript,
  nodejs,
  react,
  sass,
  tailwindcss,
  typescript,
  svelte,
  bootstrap,
  french,
  english,
  chinese,
  japanese,
  express,
  mongodb,
  vscode,
  figma,
  python,
  fastapi,
} from "./assets/icons/index";
import SkillCard from "./components/SkillCard";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const skills = [
  {
    title: "tools",
    list: [
      {
        title: "VSCode",
        icon: vscode,
      },
      {
        title: "Figma",
        icon: figma,
      },
      {
        title: "github",
        icon: github,
      },
    ],
  },

  {
    title: "languages",
    list: [
      {
        title: "French",
        icon: french,
      },
      {
        title: "English",
        icon: english,
      },
      {
        title: "Japanese",
        icon: japanese,
      },
      {
        title: "Chinese",
        icon: chinese,
      },
    ],
  },

  {
    title: "frontend",
    list: [
      {
        title: "html",
        icon: html,
      },
      {
        title: "css",
        icon: css,
      },
      {
        title: "javascript",
        icon: javascript,
      },
      {
        title: "react",
        icon: react,
      },
      {
        title: "svelte",
        icon: svelte,
      },
      {
        title: "typescript",
        icon: typescript,
      },
      {
        title: "sass",
        icon: sass,
      },
      {
        title: "tailwindcss",
        icon: tailwindcss,
      },
      {
        title: "bootstrap",
        icon: bootstrap,
      },
    ],
  },
  {
    title: "backend",
    list: [
      {
        title: "nodejs",
        icon: nodejs,
      },
      {
        title: "python",
        icon: python,
      },
      {
        title: "expressjs",
        icon: express,
      },
      {
        title: "fastapi",
        icon: fastapi,
      },
      {
        title: "mongoDB",
        icon: mongodb,
      },
    ],
  },
];

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isGrid, setIsGrid] = useState(false);
  const grid = useRef();
  const aboutHeader = useRef();
  const section = useRef();
  console.log(isGrid);
  useState(() => {
    setIsGrid(false);
  }, []);

  ScrollTrigger.create({
    trigger: "#aboutSection",
    start: "top center",
    onEnter: () => setIsGrid(true),
    onLeaveBack: () => setIsGrid(false),
    markers: true,
  });

  useGSAP(() => {
    const state = Flip.getState(".item");

    Flip.from(state, {
      absolute: true, // uses position: absolute during the flip to work around flexbox challenges
      duration: 1,
      stagger: 0.5,
      ease: "power1.Out",
    });
  }, [isGrid]);

  return (
    <section
      id="aboutSection"
      ref={section}
      className="about-section flex justify-center items-center min-h-[100vh] bg-slate-950 px-desktop-responsive mt-50 py-50"
    >
      <div
        id="grid"
        ref={grid}
        className={`flex flex-col grid-cols-8 grid-rows-12 gap-4 ${
          isGrid && "md:grid"
        }`}
      >
        <header
          id="headerAbout"
          ref={aboutHeader}
          className="aboutHeader bg-white text-slate-950 px-12  py-13 rounded-2xl col-span-5 row-span-6 text-center md:text-left item"
        >
          <h2 id="section-title" className="font-title text-5xl mb-3">
            About
          </h2>
          <p>Hi there 👋,</p>
          <p className="mb-11">
            I am a French web developer currently based in Taiwan. Originally
            specialized in frontend developer, I am currently learning backend
            development and UI/UX design.
          </p>
          <button className="px-6 py-3 bg-slate-950 text-white rounded-lg border border-slate-950 hover:text-slate-950 hover:bg-white  font-title uppercase">
            Download CV
          </button>
        </header>

        <SkillCard
          title={"I use"}
          list={skills[0].list}
          gridPos={"col-span-3 row-start-1 col-start-6 row-span-3 item"}
        />
        <SkillCard
          title={"I speak"}
          list={skills[1].list}
          gridPos={"col-start-6 row-start-4 col-span-3 row-span-3 item"}
        />
        <SkillCard
          title={"frontend"}
          list={skills[2].list}
          gridPos={"col-span-4 row-span-3 item"}
        />
        <SkillCard
          title={"backend"}
          list={skills[3].list}
          gridPos={"col-span-4 row-span-3 item"}
        />
      </div>
    </section>
  );
};

export default About;
