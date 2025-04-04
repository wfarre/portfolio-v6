import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import KasaImg from "/assets/images/projects/kasa.png";
import PetitsPlatsImg from "/assets/images/projects/petitsplats.png";
import SpaceTourismImg from "/assets/images/projects/spacetourism.png";
import PortfolioImg from "/assets/images/projects/porfolio.png";
import FisheyeImg from "/assets/images/projects/fisheye.png";
import EcommerceImg from "/assets/images/projects/ecommerce.png";

const projects = [
  {
    picture: "/assets/images/projects/extensions.png",
    title: "Browser Extensions List",
    company: "Frontend mentor",
    date: "2025",
    tags: ["Vue", "Vue-router", "Pinia", "TailwindCSS"],
    links: {
      github:
        "https://github.com/wfarre/browser-extension-manager-UI/tree/main",
      live: "https://browser-extension-manager-ui-rho.vercel.app/",
    },
  },
  {
    picture: "/assets/images/projects/porfolio.png",
    title: "Portfolio",
    company: "frontend mentor",
    date: "2024",
    tags: ["Nextjs", "CSS"],
    links: {
      github: "https://github.com/wfarre/fake-portfolio/tree/main",
      live: "https://fake-portfolio-jjpciyrpv-wfarres-projects.vercel.app/",
    },
  },
  {
    picture: "/assets/images/projects/fisheye.png",
    title: "Fisheye",
    date: "2022",
    company: "OpenClassrooms",
    tags: ["HTML", "Javascript", "Sass", "Accessibility"],
    links: {
      github: "https://github.com/wfarre/Front-End-Fisheye/tree/main",
      live: "https://front-end-fisheye.vercel.app/",
    },
  },
  {
    picture: "/assets/images/projects/petitsplats.png",
    title: "Les petits plats",
    date: "2022",
    company: "OpenClassrooms",
    tags: ["HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/wfarre/LesPetitsPlats-P7/tree/master",
      live: "https://les-petits-plats-p7-qlvjnnn4u-wfarre.vercel.app/",
    },
  },
  {
    picture: "/assets/images/projects/kasa.png",
    title: "Kasa",
    date: "2022",
    company: "OpenClassrooms",
    tags: ["React", "Sass", "Typescript", "React-router"],
    links: {
      github: "https://github.com/wfarre/kasa-v2/tree/main",
      live: "https://kasa-v2-tau.vercel.app/",
    },
  },
  {
    picture: "/assets/images/projects/spacetourism.png",
    title: "Space Tourism",
    date: "2023",
    company: "frontend mentor",
    tags: ["Nextjs", "Sass", "Typescript"],
    links: {
      github: "https://github.com/wfarre/space-tourism-app/tree/main",
      live: "https://space-tourism-app-iota.vercel.app/technology",
    },
  },
  {
    picture: "/assets/images/projects/ecommerce.png",
    title: "Ecommerce",
    company: "frontend mentor",
    date: "2023",
    tags: ["Typescript", "CSS", "HTML"],
    links: {
      github: "https://github.com/wfarre/ecommerce/tree/main",
      live: "https://ecommerce-jokg.vercel.app/",
    },
  },
  {
    picture: "/assets/images/projects/portfolio2024.png",
    title: "Portfolio 2024",
    company: "personal",
    date: "2024",
    tags: ["Typescript", "CSS", "HTML", "Next.js", "materialUI"],
    links: {
      github: "https://github.com/wfarre/portfolio-app-v4/tree/main",
      live: "https://william-portfolio-psi.vercel.app/",
    },
  },
  {
    picture: "/assets/images/projects/portfolio2022.png",
    title: "Portfolio 2022",
    company: "personal",
    date: "2022",
    tags: ["React", "CSS", "HTML", "Javascript"],
    links: {
      github: "https://github.com/wfarre/williamdev-portfolio-app/tree/master",
      live: "https://williamdev-portfolio-app.vercel.app/",
    },
  },
];

gsap.registerPlugin(ScrollTrigger);

const Porfolio = () => {
  const sectionHeaderText = useRef();
  const sectionTitle = useRef();
  const sectionTitleBefore = useRef();
  const sectionTitleAfter = useRef();
  const sectionMain = useRef();
  const sectionHeader = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionHeaderText.current,
        pin: true,
        start: "top center",
        end: "+=1000",
        // markers: true,
        scrub: true,
      },
    });
    timeline
      .from(sectionHeaderText.current, {
        scale: 150,
        opacity: 0,
        duration: 2,
      })
      .to([sectionTitleBefore.current, sectionTitleAfter.current], {
        delay: 2,
        opacity: 0,
        duration: 2,
      })
      .to([sectionTitleBefore.current, sectionTitleAfter.current], {
        scale: 0,
      })
      .to(sectionHeaderText.current, {
        x: () => innerWidth / 2 - 400,
        duration: 2,
        justifyContent: "flex-end",
      })
      .from(sectionMain.current, {
        opacity: 0,
        duration: 3,
      });
  });
  return (
    <section
      id="portfolioSection"
      className="relative min-h-[100vh] bg-slate-950 pb-40"
    >
      <header
        ref={sectionHeader}
        className="px-desktop-responsive mb-10 inline-flex w-full justify-center overflow-y-hidden"
      >
        <h2 ref={sectionHeaderText} className="text-2xl italic lg:text-5xl">
          <span ref={sectionTitleBefore}>Check out some frontend</span>{" "}
          <span ref={sectionTitle} className="font-title uppercase not-italic">
            projects
          </span>{" "}
          <span ref={sectionTitleAfter}>I built.</span>
        </h2>
      </header>
      <ul ref={sectionMain} className="flex flex-col px-4">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={"project-" + project.title + index}
              title={project.title}
              picture={project.picture}
              company={project.company}
              date={project.date}
              stack={project.tags}
              links={project.links}
              index={index}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Porfolio;
