import React from "react";

const Navbar = () => {
  return (
    <nav className="pt-6 md:pt-20 ">
      <ul className="flex gap-5 md:gap-8 justify-center py-2 px-4 w-fit mx-auto rounded-full bg-white/20  backdrop-blur-2xl text-slate-300">
        <li>
          <a className=" cursor-pointer font-bold text-white">Home</a>
        </li>
        <li>
          <a className=" cursor-pointer">About</a>
        </li>
        <li>
          <a className=" cursor-pointer">Portfolio</a>
        </li>
        <li>
          <a className=" cursor-pointer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
