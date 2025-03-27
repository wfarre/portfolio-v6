import React from "react";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  {
    title: "facebook",
    icon: faFacebook,
    link: "https://www.facebook.com/william.farre",
  },
  {
    title: "linkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/william-farre-50657391/",
  },
  {
    title: "gitHub",
    icon: faGithub,
    link: "https://github.com/wfarre",
  },
  {
    title: "instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/wfarre/",
  },
];

const Sns = () => {
  return (
    <ul className="relative flex justify-center gap-6 md:justify-end">
      {links.map((link, index) => {
        return (
          <li key={"sns" + index}>
            <a
              className="relative cursor-pointer"
              href={link.link}
              target="_blank"
            >
              <FontAwesomeIcon
                className={
                  "text-2xl transition-all duration-300 hover:scale-110 hover:text-orange-500 md:text-3xl"
                }
                icon={link.icon}
              />
              <span className="absolute top-0 left-0 scale-0">
                {link.title}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Sns;
