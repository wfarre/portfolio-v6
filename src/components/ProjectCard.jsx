import { Canvas } from "@react-three/fiber";
import React from "react";
import Flag from "../Experience/Flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  return (
    <li
      className="group relative flex w-full items-end py-4 font-bold uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:content-[''] lg:h-18 lg:py-0"
      tabIndex={props.index}
    >
      <ul className="h-full lg:w-full lg:overflow-hidden">
        <li className="flex h-full transition-all duration-300 lg:items-center lg:px-6 lg:group-hover:translate-y-[-72px] lg:group-focus:translate-y-[-72px]">
          <h3 className="text-3xl lg:text-5xl">{props.company}</h3>
        </li>

        <li className="flex h-full flex-col justify-between text-slate-200 transition-all duration-600 lg:w-full lg:flex-row lg:items-center lg:bg-white lg:px-6 lg:text-slate-950 lg:opacity-0 lg:group-hover:translate-y-[-72px] lg:group-hover:opacity-100 lg:group-focus:translate-y-[-72px] lg:group-focus:opacity-100">
          <ul className="flex items-center gap-4">
            <li>
              <h3 className="mr-2 text-2xl lg:text-5xl">{props.title}</h3>
            </li>
            <li>
              <a
                href={props.links.github}
                target="_blank"
                className="relative cursor-pointer"
              >
                <FontAwesomeIcon
                  className={
                    "text-2xl transition-all duration-300 hover:scale-110 hover:text-orange-500 md:text-3xl"
                  }
                  icon={faGithub}
                />
                <span className="absolute top-0 left-0 scale-0 opacity-0">{`Visit ${props.title}'s live website`}</span>
              </a>
            </li>
            <li>
              <a
                href={props.links.live}
                target="_blank"
                className="cursor-pointer"
              >
                <FontAwesomeIcon
                  className={
                    "text-2xl transition-all duration-300 hover:scale-110 hover:text-orange-500 md:text-3xl"
                  }
                  icon={faGlobe}
                />
                <span className="absolute top-0 left-0 scale-0 opacity-0">{`Visit ${props.title}'s Github repository`}</span>
              </a>
            </li>
          </ul>

          <ul className="flex flex-col lg:items-end">
            <li>
              <ul className="flex flex-wrap gap-x-3 text-xs lg:text-lg">
                {props.stack.map((techno) => {
                  return <li key={techno + props.title}>{techno}</li>;
                })}
              </ul>
            </li>
            <li className="text-xs font-normal lg:text-sm">
              Completed in {props.date}
            </li>
          </ul>
        </li>
      </ul>

      <div className="pointer-events-none absolute right-0 bottom-0 z-50 hidden h-100 w-100 rotate-5 transition-transform duration-800 group-hover:block group-focus:block lg:h-200 lg:w-200">
        <Canvas
          className="absolute right-0 bottom-0 h-full w-full"
          camera={{
            fov: 20,
            near: 0.1,
            far: 200,
            position: [1, 1, 6],
          }}
        >
          <Flag picture={props.picture} />
        </Canvas>
      </div>
    </li>
  );
};

export default ProjectCard;
