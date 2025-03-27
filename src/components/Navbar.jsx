import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const navLinks = [
  {
    title: "Home",
    link: "#heroSection",
  },
  {
    title: "About",
    link: "#headerAbout",
  },
  {
    title: "Portfolio",
    link: "#portfolioSection",
  },
  {
    title: "Contact",
    link: "#contactSection",
  },
];

const Navbar = (props) => {
  const [currentLink, setCurrentLink] = useState("home");
  const navbarRef = useRef();
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 2,
      delay: 1.2,
    });
  });

  const handleLinkClick = (linkName) => {
    setCurrentLink(linkName);
    props.getCurrentLink(linkName);
  };
  return (
    <nav className="sticky top-0 z-40 pt-6 md:pt-15" ref={navbarRef}>
      <ul className="mx-auto flex w-fit justify-center gap-5 rounded-full bg-white/20 px-4 py-2 text-xs backdrop-blur-2xl md:gap-8 md:text-lg">
        {navLinks.map((link, index) => {
          return (
            <li key={"nav-link" + index}>
              <a
                className={`cursor-pointer font-bold uppercase hover:text-white ${
                  currentLink.toLowerCase() === link.title.toLowerCase()
                    ? "text-white"
                    : "text-slate-300"
                }`}
                onClick={() => handleLinkClick(link.title)}
                href={link.link}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
