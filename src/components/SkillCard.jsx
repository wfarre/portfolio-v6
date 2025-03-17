import React from "react";

const SkillCard = (props) => {
  // useEffect(() => {
  //   if (props.ref.current) {
  //     gsap.to(props.ref.current, { backgroundColor: "white", opacity: 1 });
  //   }
  // }, []);
  return (
    <section
      ref={props.ref}
      className={`flex flex-col justify-center rounded-2xl bg-white px-[calc((48_/_1440)_*_100vw)] py-6 text-slate-950 md:py-2 ${props.gridPos} opacity-0`}
    >
      <header className="mb-4">
        <h3 className="text-xl font-bold uppercase">{props.title}</h3>
      </header>
      <ul className="flex flex-wrap gap-4 gap-y-4">
        {props.list.map((skill, index) => {
          return (
            <li key={index} className="relative h-8 w-8 md:h-10 md:w-10">
              <img
                className="absolute top-0 left-0 h-full w-full"
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
