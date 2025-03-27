import React from "react";

const ButtonLink = (props) => {
  return (
    <a
      href={props.link}
      className={`font-title cursor-pointer rounded-lg border ${props.type === "primary" ? "border-slate-950 bg-slate-950 px-6 py-3 text-white uppercase hover:bg-white hover:text-slate-950" : "border-white bg-white px-6 py-3 text-slate-950 uppercase hover:bg-slate-950 hover:text-white"}`}
    >
      {props.buttonText}
    </a>
  );
};

export default ButtonLink;
