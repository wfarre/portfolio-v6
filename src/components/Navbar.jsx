import React, { useState } from "react";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Portfolio",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
];

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState("home");
  return (
    <nav className="pt-6 md:pt-20 ">
      <ul className="flex gap-5 md:gap-8 justify-center py-2 px-4 w-fit mx-auto rounded-full bg-white/20  backdrop-blur-2xl ">
        {navLinks.map((link, index) => {
          return (
            <li key={"nav-link" + index}>
              <a
                className={`uppercase cursor-pointer font-bold hover:text-white ${
                  currentLink.toLowerCase() === link.title.toLowerCase()
                    ? "text-white"
                    : "text-slate-300"
                }`}
                onClick={() => setCurrentLink(link.title)}
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
