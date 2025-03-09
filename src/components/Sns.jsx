import React from "react";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sns = () => {
  return (
    <ul className="relative flex justify-center md:justify-end gap-6">
      <li>
        <a className=" cursor-pointer">
          <FontAwesomeIcon
            className={"text-2xl md:text-3xl hover:text-orange-500"}
            icon={faFacebook}
          />
        </a>
      </li>
      <li>
        <a className=" cursor-pointer">
          <FontAwesomeIcon
            className={"text-2xl md:text-3xl"}
            icon={faLinkedin}
          />
        </a>
      </li>
      <li>
        <a className=" cursor-pointer">
          <FontAwesomeIcon
            className={"text-2xl md:text-3xl"}
            icon={faInstagram}
          />
        </a>
      </li>
      <li>
        <a className=" cursor-pointer">
          <FontAwesomeIcon className={"text-2xl md:text-3xl"} icon={faGithub} />
        </a>
      </li>
    </ul>
  );
};

export default Sns;
