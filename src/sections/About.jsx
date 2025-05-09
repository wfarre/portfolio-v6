import React, { useRef } from "react";
import SkillCard from "../components/ui/SkillCard";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ButtonLink from "../components/ui/ButtonLink";

const skills = [
  {
    title: "tools",
    list: [
      {
        title: "VSCode",
        url: "/assets/images/icons/vscode.svg",
      },
      {
        title: "Figma",
        url: "/assets/images/icons/figma.svg",
      },
      {
        title: "github",
        url: "/assets/images/icons/github.svg",
      },
    ],
  },

  {
    title: "languages",
    list: [
      {
        title: "French",
        url: "/assets/images/icons/french.svg",
      },
      {
        title: "English",
        url: "/assets/images/icons/english.svg",
      },
      {
        title: "Japanese",
        url: "/assets/images/icons/japanese.svg",
      },
      {
        title: "Chinese",
        url: "/assets/images/icons/chinese.svg",
      },
    ],
  },

  {
    title: "frontend",
    list: [
      {
        title: "html",
        url: "/assets/images/icons/html.svg",
      },
      {
        title: "css",
        url: "/assets/images/icons/css.svg",
      },
      {
        title: "javascript",
        url: "/assets/images/icons/javascript.svg",
      },
      {
        title: "react",
        url: "/assets/images/icons/react.svg",
      },
      {
        title: "svelte",
        url: "/assets/images/icons/svelte.svg",
      },
      {
        title: "typescript",
        url: "/assets/images/icons/typescript.svg",
      },
      {
        title: "sass",
        url: "/assets/images/icons/sass.svg",
      },
      {
        title: "tailwindcss",
        url: "/assets/images/icons/tailwindcss.svg",
      },
      {
        title: "bootstrap",
        url: "/assets/images/icons/bootstrap.svg",
      },
    ],
  },
  {
    title: "backend",
    list: [
      {
        title: "nodejs",
        url: "/assets/images/icons/nodejs.svg",
      },
      {
        title: "python",
        url: "/assets/images/icons/python.svg",
      },
      {
        title: "expressjs",
        url: "/assets/images/icons/express.svg",
      },
      {
        title: "fastapi",
        url: "/assets/images/icons/fastapi.svg",
      },
      {
        title: "mongoDB",
        url: "/assets/images/icons/mongodb.svg",
      },
    ],
  },
];

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const grid = useRef();
  const section = useRef();
  const sectionIntroText = useRef();
  const sectionIntroTextWrapper = useRef();
  const skillCard0 = useRef();
  const skillCard1 = useRef();
  const skillCard2 = useRef();
  const skillCard3 = useRef();
  const skillCard4 = useRef();

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
        // markers: true,
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

      <div
        id="grid"
        ref={grid}
        className={`mt-40 flex grid-cols-8 grid-rows-12 flex-col gap-4 bg-white md:grid`}
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
          <ButtonLink
            link={"/assets/resume_WF.pdf"}
            Text={"Dowload CV"}
            type={"primary"}
          />
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
