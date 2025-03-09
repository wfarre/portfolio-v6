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
    <ul className="relative flex justify-center md:justify-end gap-6">
      {links.map((link, index) => {
        return (
          <li key={"sns" + index}>
            <a className="cursor-pointer" href={link.link} target="_blank">
              <FontAwesomeIcon
                className={
                  "text-2xl md:text-3xl hover:text-orange-500 hover:scale-110 transition-all duration-300"
                }
                icon={link.icon}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Sns;
