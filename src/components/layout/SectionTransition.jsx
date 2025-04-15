import React from "react";

const SectionTransition = ({ ref, currentSection }) => {
  return (
    <div
      ref={ref}
      className={`fixed top-[50%] left-0 z-50 flex h-[95vh] w-[100vw] origin-right translate-y-[-50%] scale-x-0 items-center justify-center bg-white`}
    >
      <h2 className="font-title text-5xl text-slate-950 uppercase">
        {currentSection}
      </h2>
    </div>
  );
};

export default SectionTransition;
