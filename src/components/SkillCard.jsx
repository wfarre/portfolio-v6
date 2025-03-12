import React from "react";

const SkillCard = (props) => {
  return (
    <section
      className={`bg-white flex flex-col justify-center text-slate-950 px-[calc((48_/_1440)_*_100vw)] py-6 md:py-2  rounded-2xl ${props.gridPos}`}
    >
      <header className="mb-4">
        <h3 className="text-xl uppercase font-bold">{props.title}</h3>
      </header>
      <ul className="flex flex-wrap gap-4 gap-y-4 ">
        {props.list.map((skill, index) => {
          return (
            <li key={index} className="relative h-8 w-8 md:h-10 md:w-10">
              <img
                className="absolute h-full w-full top-0 left-0"
                src={skill.icon}
                alt={skill.title}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SkillCard;
