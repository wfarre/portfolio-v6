import React from "react";

export const Skills = (props) => {
  return (
    <section
      ref={props.ref}
      className={`flex flex-col justify-center py-6 text-slate-950 md:py-2 ${props.gridPos}`}
    >
      <header className="mb-4">
        <h3 className="text-xl font-bold text-white uppercase">
          {props.title}
        </h3>
      </header>
      {/* <ul className="flex flex-wrap gap-4 gap-y-4">
        {props.list.map((skill, index) => {
          return (
            <li
              key={index}
              className="relative flex-1/6 rounded-lg border border-white px-4 py-2 text-center text-white"
            >
              {skill.title}
            </li>
          );
        })}
      </ul> */}
      <ul className="grid grid-cols-5 gap-4 gap-y-4">
        {props.list.map((skill, index) => {
          return (
            <li
              key={index}
              className="relative flex-1/6 rounded-lg border border-white px-4 py-2 text-center text-white"
            >
              {skill.title}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
