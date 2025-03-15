import React from "react";
import { Canvas } from "@react-three/fiber";

import Flag from "./Experience/Flag";

import Fisheye from "./assets/projects/fisheye.png";
import ECommerce from "./assets/projects/ecommerce.png";
import Kasa from "./assets/projects/kasa.png";
import Petitsplats from "./assets/projects/petitsplats.png";
import SpaceTourism from "./assets/projects/spacetourism.png";
import ProjectCard from "./components/ProjectCard";

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

const Porfolio = () => {
  return (
    <section className="min-h-[100vh] mt-100 bg-slate-950 relative">
      <header className="mb-20">
        <h2 className="text-3xl">Recent projects</h2>
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
