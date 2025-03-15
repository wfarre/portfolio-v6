import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";

import Flag from "./Experience/Flag";

import Fisheye from "./assets/projects/fisheye.png";
import ECommerce from "./assets/projects/ecommerce.png";
import Kasa from "./assets/projects/kasa.png";
import Petitsplats from "./assets/projects/petitsplats.png";
import SpaceTourism from "./assets/projects/spacetourism.png";
import ProjectCard from "./components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const projects = [
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: Fisheye,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: Kasa,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: SpaceTourism,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: ECommerce,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "Sass",
      "Accessibility",
      "react",
      "jest",
    ],
    picture: Petitsplats,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: Fisheye,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: Kasa,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: Kasa,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: Fisheye,
  },
  {
    title: "fisheye",
    date: "2022",
    company: "OpenClassrooms",
    stack: ["HTML", "CSS", "Javascript", "Sass", "Accessibility"],
    picture: Kasa,
  },
];
gsap.registerPlugin(ScrollTrigger);

const Porfolio = () => {
  const sectionHeaderText = useRef();
  const sectionTitle = useRef();
  const sectionTitleBefore = useRef();
  const sectionTitleAfter = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionHeaderText.current,
        pin: true,
        start: "top center",
        end: "+=1000",
        markers: true,
        scrub: 1,
      },
    });
    timeline
      .from(sectionHeaderText.current, {
        scale: 150,
        opacity: 0,
        duration: 2,
      })
      .to([sectionTitleBefore.current, sectionTitleAfter.current], {
        delay: 1,
        opacity: 0,
        duration: 2,
      })
      .to(sectionHeaderText.current, {
        x: "50%",
        duration: 1,
        justifyItems: "flex-end",
      });
  });
  return (
    <section className="relative mt-100 min-h-[100vh] bg-slate-950">
      <header className="mb-10 inline-flex w-full justify-center">
        <p ref={sectionHeaderText} className="text-2xl italic lg:text-3xl">
          <span ref={sectionTitleBefore}>Feel free to check some frontend</span>{" "}
          <span ref={sectionTitle} className="font-title uppercase not-italic">
            projects
          </span>{" "}
          <span ref={sectionTitleAfter}>I built.</span>{" "}
        </p>
        {/* <h2 className="font-title pt-10 text-right text-6xl">
          Recent projects
        </h2> */}
      </header>
      <ul className="flex flex-col px-4">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={"project-" + project.title + index}
              title={project.title}
              picture={project.picture}
              company={project.company}
              date={project.date}
              stack={project.stack}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Porfolio;
