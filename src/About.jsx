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
import Button from "./components/Button";

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
  const [isGrid, setIsGrid] = useState(true);
  const grid = useRef();
  const section = useRef();

  const sectionIntroText = useRef();
  const sectionIntroTextWrapper = useRef();

  const skillCard0 = useRef();
  const skillCard1 = useRef();
  const skillCard2 = useRef();
  const skillCard3 = useRef();
  const skillCard4 = useRef();

  console.log(isGrid);
  useState(() => {
    setIsGrid(false);
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        pin: true,
        pinSpacing: 0,
        start: "50% center",
        end: "200% center",
        toggleActions: "restart pause pause pause",
        scrub: 0.5,
        markers: true,
      },
    });

    timeline
      .timeScale(0.2)
      .from(sectionIntroText.current, {
        x: -1500,
      })
      .to(sectionIntroText.current, {
        delay: 2,
        scale: 100,
        opacity: 0,
      })
      .to(
        [
          skillCard0.current,
          skillCard1.current,
          skillCard2.current,
          skillCard3.current,
          skillCard4.current,
        ],
        {
          opacity: 1,
          autoAlpha: 1,
          backgroundColor: "white",
          duration: 5,

          clearProps: "all",
          stagger: 0.5,
        },
      )
      .to(
        [
          skillCard0.current,
          skillCard1.current,
          skillCard2.current,
          skillCard3.current,
          skillCard4.current,
        ],
        {
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        },
      );

    // Flip.from(state, {
    //   absolute: true, // uses position: absolute during the flip to work around flexbox challenges
    //   duration: 1,
    //   stagger: 0.5,
    //   ease: "power1.Out",
    // });
  }, []);

  return (
    <section
      id="aboutSection"
      ref={section}
      className="about-section px-desktop-responsive relative flex min-h-[100vh] flex-col items-center justify-center bg-slate-950 py-20"
    >
      <div
        className="px-desktop-responsive absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-x-hidden bg-slate-950"
        ref={sectionIntroTextWrapper}
      >
        <p ref={sectionIntroText} className="text-2xl italic lg:text-5xl">
          A little bit about me and my skills...
        </p>
      </div>

      {/* <div
        id="grid"
        ref={grid}
        className={`mt-12 flex grid-cols-8 grid-rows-12 flex-col gap-4 ${
          isGrid && "md:grid"
        }`}
      > */}

      <div
        id="grid"
        ref={grid}
        className={`mt-12 flex grid-cols-8 grid-rows-12 flex-col gap-4 bg-white md:grid`}
      >
        <header
          ref={skillCard0}
          id="headerAbout"
          className="aboutHeader item col-span-5 row-span-6 rounded-2xl bg-white px-12 py-13 text-center text-slate-950 opacity-0 md:text-left"
        >
          <h2 id="section-title" className="font-title mb-3 text-5xl">
            About
          </h2>
          <p>Hi there 👋,</p>
          <p className="mb-11">
            I am a French web developer currently based in Taiwan. Originally
            specialized in frontend developer, I am currently learning backend
            development and UI/UX design.
          </p>
          <Button buttonText={"Dowload CV"} type={"primary"} />
        </header>

        <SkillCard
          ref={skillCard1}
          title={"I use"}
          list={skills[0].list}
          gridPos={"col-span-3 row-start-1 col-start-6 row-span-3 item"}
        />
        <SkillCard
          ref={skillCard2}
          title={"I speak"}
          list={skills[1].list}
          gridPos={"col-start-6 row-start-4 col-span-3 row-span-3 item"}
        />
        <SkillCard
          ref={skillCard3}
          title={"frontend"}
          list={skills[2].list}
          gridPos={"col-span-4 row-span-3 item"}
        />
        <SkillCard
          ref={skillCard4}
          title={"backend"}
          list={skills[3].list}
          gridPos={"col-span-4 row-span-3 item"}
        />
      </div>
    </section>
  );
};

export default About;
